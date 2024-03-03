import * as logging from '@aws-lambda-powertools/logger';
import { getLogLevel } from 'lambda-logging/src/level';
import { SQSClient } from '@aws-sdk/client-sqs';
import * as sqs from 'sqs-helper';
import * as uuid from 'uuid';
import { BusConsumerKafkaEvent, KafkaJsonRecord } from 'interfaces/src/bus/kafka';

const logLevel = getLogLevel();

const logger = new logging.Logger({
  serviceName: 'BusConsumer',
  logLevel: logLevel
});

const getTargetQueueUrlFromEnv = (): string => {
  if (!process.env.QUEUE_URL) {
    throw new Error('QUEUE_URL environment variable not set');
  } else {
    const queueUrl = process.env.QUEUE_URL;
    logger.info(`QUEUE_URL ${queueUrl}`);
    return queueUrl;
  }
};

const getTargetQueueUrl = (event: BusConsumerKafkaEvent): string => {
  if (event.busConsumerTargetQueue) {
    return event.busConsumerTargetQueue;
  } else {
    return getTargetQueueUrlFromEnv();
  }
};

let EVENT_TYPE: string;

if (!process.env.EVENT_TYPE) {
  throw new Error('EVENT_TYPE environment variable not set');
} else {
  EVENT_TYPE = process.env.EVENT_TYPE;
}

const client = new SQSClient({ retryMode: process.env.AWS_RETRY_MODE || 'standard', maxAttempts: Number(process.env.AWS_MAX_ATTEMPTS) || 3 });

const logSingleKafkaRecordMessageValue = (messageValueAsObject: object) => {
  logger.debug('raw kafka record message value', { messageValue: messageValueAsObject });
};

const logKafkaRecordsMessageValues = (records: KafkaJsonRecord[]) => {
  for (const record of records) {
    try {
      const parsedRecord = JSON.parse(Buffer.from(record.value, 'base64').toString());
      logSingleKafkaRecordMessageValue(parsedRecord);
    } catch (error) {
      logger.error('error when parsing record value:', { recordValue: record.value, typeOfValue: typeof record.value });
    }
  }
};

function mapEventToSqsEntry(event: BusConsumerKafkaEvent) {
  // Here we lose the keys of the records (which is <topic>-<partition>)
  // We dont need it, those values are also contained within a single record
  const records = Object.values(event.records).flatMap((record) => record);
  logKafkaRecordsMessageValues(records);
  return records.map((record) => ({
    Id: uuid.v4(),
    MessageBody: Buffer.from(record.value, 'base64').toString('utf8'),
    MessageAttributes: {
      ['eventType']: {
        DataType: 'String',
        StringValue: EVENT_TYPE
      },
      ['kafkaTimestamp']: {
        DataType: 'String',
        StringValue: record.timestamp.toString()
      }
    }
  }));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function lambdaHandler(event: BusConsumerKafkaEvent, _context: AWSLambda.Context) {
  logger.debug('event', { event });

  const sqsEntries = mapEventToSqsEntry(event);
  const responses = await sqs.sendMessagesToQueueInBatches(getTargetQueueUrl(event), sqsEntries, client, logger, 10);
  try {
    sqs.handleSqsBatchMessageSendRequest(responses);
  } catch (error) {
    if (error instanceof sqs.UnprocessedItemsError) {
      logger.error('Failed to send following items for ingestion', { unprocessedItems: error.unprocessedItems });
    } else {
      throw error;
    }
  }
}
