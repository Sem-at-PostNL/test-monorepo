import * as helperInterfaces from '@core/interfaces';
import { SQSEvent, SQSMessageAttributes, SQSRecord } from 'aws-lambda';

const createSqsRecord = (eventBody: object, messageAttributes?: Record<string, string>, rootProperties: Partial<SQSRecord> | undefined = {}) => {
  const dummyAttributes = {
    ApproximateReceiveCount: 'DUMMY',
    SentTimestamp: 'DUMMY',
    SenderId: 'DUMMY',
    ApproximateFirstReceiveTimestamp: 'DUMMY'
  };
  const mockMessageAttributes: SQSMessageAttributes = {
    Dummy: {
      dataType: 'string',
      stringValue: 'DUMMY',
      stringListValues: [] as never[],
      binaryListValues: [] as never[]
    }
  };
  if (messageAttributes) {
    Object.keys(messageAttributes).forEach((key) => {
      mockMessageAttributes[key] = {
        stringListValues: [] as never[],
        binaryListValues: [] as never[],
        dataType: 'string',
        stringValue: messageAttributes[key]
      };
    });
  }
  return {
    body: JSON.stringify(eventBody),
    messageAttributes: mockMessageAttributes,
    attributes: dummyAttributes,
    messageId: 'DUMMY',
    receiptHandle: 'DUMMY',
    md5OfBody: 'DUMMY',
    eventSource: 'DUMMY',
    eventSourceARN: 'DUMMY',
    awsRegion: 'DUMMY',
    ...rootProperties
  };
};

export const createSQSEvent = (event: object, messageAttributes?: Record<string, string>, rootProperties: Partial<SQSRecord> | undefined = {}): SQSEvent => {
  return {
    Records: [createSqsRecord(event, messageAttributes, rootProperties)]
  };
};

export const createSQSEventWithMultipleRecords = (
  eventBodies: object[],
  messageAttributes?: Record<string, string>,
  rootProperties: Partial<SQSRecord> | undefined = {}
): SQSEvent => {
  let sqsEvent: SQSEvent = {
    Records: []
  };
  eventBodies.forEach((eventBody) => {
    const sqsRecord = createSqsRecord(eventBody, messageAttributes, rootProperties);
    sqsEvent.Records.push(sqsRecord);
  });
  return sqsEvent;
};

export const createKafkaEvent = (event: object, kafkaTopicName: string): helperInterfaces.KafkaEvent => {
  return {
    eventSource: 'SelfManagedKafka',
    records: {
      [kafkaTopicName]: [
        {
          topic: kafkaTopicName,
          timestamp: new Date().getTime(),
          timestampType: 'CREATE_TIME',
          value: Buffer.from(JSON.stringify(event)).toString('base64')
        }
      ]
    }
  };
};

export const createKafkaEventNoSource = (event: object, kafkaTopicName: string): helperInterfaces.KafkaEvent => {
  return {
    records: {
      [kafkaTopicName]: [
        {
          topic: kafkaTopicName,
          timestamp: new Date().getTime(),
          timestampType: 'CREATE_TIME',
          value: Buffer.from(JSON.stringify(event)).toString('base64')
        }
      ]
    }
  };
};

export const createEventBridgeEvent = (event: object, type: string = 'nl.postnl.pnlecus.test.rfidscan', eventTime: string = new Date().toISOString()) => {
  return {
    rawEvent: event,
    type,
    source: 'SelfManagedKafka',
    richEvent: {
      eventTime,
      eventType: 'eMagizRfidEvent',
      readPoint: 'urn:postnl:bv:rp:schiphol.cas.airsidedock',
      rollcageId: '00087205080000860303'
    }
  };
};

export const createScheduledEventBridgeEvent = (payload: { [key: string]: any }) => {
  return {
    id: '53dc4d37-cffa-4f76-80c9-8b7d4a4d2eaa',
    'detail-type': 'Scheduled Event',
    source: 'aws.events',
    account: '123456789012',
    time: '2019-10-08T16:53:06Z',
    region: 'us-east-1',
    resources: ['arn:aws:events:us-east-1:123456789012:rule/MyScheduledRule'],
    detail: payload
  };
};

export const createEventBridgeEventOnlyRawEvent = (event: object, type: string = 'undefined') => {
  return {
    rawEvent: event,
    type,
    richEvent: {}
  };
};
