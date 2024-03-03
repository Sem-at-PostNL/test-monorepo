import * as sqs from '@aws-sdk/client-sqs';
import * as eventFixtures from 'fixtures';
// import * as clientMock from 'aws-sdk-client-mock';
import { sendMessagesToQueueInBatches } from '../src/sqs';
import { Logger } from '@aws-lambda-powertools/logger';

jest.mock('@aws-sdk/client-sqs', () => {
  return {
    ...jest.requireActual('@aws-sdk/client-sqs'),
    SQSClient: jest.fn().mockImplementation(() => {
      return {
        send: jest.fn()
      };
    })
  };
});

jest.mock('@aws-lambda-powertools/logger');

let sqsMock: sqs.SQSClient;
let logger: Logger;

const messageAttribute = (value: string) => ({
  StringValue: value,
  DataType: 'String'
});

const entry = {
  Id: '123e4567-e89b-12d3-a456-426614174000',
  MessageAttributes: {
    source: messageAttribute('SelfManagedKafka'),
    topic: messageAttribute('nl.postnl.pnlecus.test.rfidscan'),
    timestamp: {
      DataType: 'String',
      StringValue: expect.stringMatching(/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z/g)
    }
  },
  MessageBody: JSON.stringify(eventFixtures.eMagizDesiredRfidScanEvent())
};

describe('Testing sqs Helper', () => {
  beforeAll(() => {
    logger = new Logger();
  });
  beforeEach(() => {
    sqsMock = new sqs.SQSClient({});
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Publishes single batch on single entry', async () => {
    const entries = Array(1).fill(entry);
    console.log(entries);
    await sendMessagesToQueueInBatches('queueUrl', entries, sqsMock, logger, 10);
    expect(sqsMock.send).toBeCalledTimes(1);
    expect(sqsMock.send).toBeCalledWith(expect.any(sqs.SendMessageBatchCommand));
  });
  it('Publishes single batch on 10 entries', async () => {
    const entries = Array(10).fill(entry);
    await sendMessagesToQueueInBatches('queueUrl', entries, sqsMock, logger, 10);
    expect(sqsMock.send).toBeCalledTimes(1);
    expect(sqsMock.send).toBeCalledWith(expect.any(sqs.SendMessageBatchCommand));
  });
  it('Publishes two batches on 11 entries', async () => {
    const entries = Array(11).fill(entry);
    await sendMessagesToQueueInBatches('queueUrl', entries, sqsMock, logger, 10);
    expect(sqsMock.send).toBeCalledTimes(2);
    expect(sqsMock.send).toBeCalledWith(expect.any(sqs.SendMessageBatchCommand));
  });
});
