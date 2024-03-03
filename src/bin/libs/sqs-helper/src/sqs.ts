import * as sqs from '@aws-sdk/client-sqs';
import * as logging from '@aws-lambda-powertools/logger';
import { chopArray } from 'utilities';
import * as AWSXray from 'aws-xray-sdk';

export const getClient = (XRay?: boolean) => {
  if (XRay) {
    return AWSXray.captureAWSv3Client(new sqs.SQSClient({ region: 'eu-west-1' }));
  } else {
    return new sqs.SQSClient({ region: 'eu-west-1' });
  }
};

export const sendMessageToQueue = async (
  queueUrl: string,
  message: object | string,
  messageAttributes: { [key: string]: sqs.MessageAttributeValue },
  client: sqs.SQSClient,
  logger: logging.Logger
): Promise<sqs.SendMessageCommandOutput> => {
  logger.info('Sending message to SQS', { message, queueUrl });
  const command: sqs.SendMessageCommand = new sqs.SendMessageCommand({
    QueueUrl: queueUrl,
    MessageBody: typeof message === 'string' ? message : JSON.stringify(message),
    MessageAttributes: messageAttributes
  });
  return client.send(command);
};

export async function sendMessagesToQueueInBatches(
  queueUrl: string,
  allRecords: sqs.SendMessageBatchRequestEntry[],
  client: sqs.SQSClient,
  logger: logging.Logger,
  batchSize: number = 10
) {
  const batches = chopArray(allRecords, batchSize);
  logger.debug('Sending messages to SQS in batches', { queueUrl, batchSize, batches: batches.length });
  const promises: Promise<sqs.SendMessageBatchCommandOutput>[] = batches.map((batch) =>
    client.send(
      new sqs.SendMessageBatchCommand({
        QueueUrl: queueUrl,
        Entries: batch
      })
    )
  );
  return Promise.all(promises);
}

export class UnprocessedItemsError extends Error {
  public readonly unprocessedItemsSqsMessageIds: string[];

  public readonly unprocessedItems: sqs.BatchResultErrorEntry[];

  constructor(unprocessedItems: sqs.BatchResultErrorEntry[]) {
    super('Unprocessed items');
    this.unprocessedItems = unprocessedItems;
    this.unprocessedItemsSqsMessageIds = unprocessedItems.reduce((acc: string[], item) => (item.Id ? [...acc, item.Id] : acc), []);
  }
}

export function handleSqsBatchMessageSendRequest(responses: sqs.SendMessageBatchCommandOutput[]) {
  const failedResponses = responses
    .filter((response) => response.Failed && response.Failed.length > 0)
    .flatMap((response) => response.Failed)
    .filter((response): response is sqs.BatchResultErrorEntry => response !== undefined);
  if (failedResponses !== undefined && failedResponses.length > 0) {
    throw new UnprocessedItemsError(failedResponses);
  }
}
