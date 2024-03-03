import * as awsLambda from 'aws-lambda';
import { SQSClient, SendMessageBatchCommand } from '@aws-sdk/client-sqs';
import { mockClient } from 'aws-sdk-client-mock';
import { KafkaEvent } from 'interfaces/src/bus/kafka';

process.env.QUEUE_URL = 'test-queue-url';
process.env.EVENT_TYPE = 'test-event-type';

import * as main from '../src/handler';

jest.mock('@aws-lambda-powertools/logger');

const sqsClientMock = mockClient(SQSClient);
const testEvent: KafkaEvent = {
  eventSource: 'test-event-source',
  bootstrapServers: 'test-bootstrap-servers',
  records: {
    ['testTopic-partition']: [
      {
        topic: 'testTopic',
        partition: 0,
        offset: 1,
        timestamp: Date.now(),
        timestampType: 'test-timestamp-type',
        key: 'test-key',
        value: 'test-value',
        headers: {
          ['test-header']: ['test-header-value']
        }
      }
    ]
  }
};
describe('lambdaHandler function', () => {
  beforeEach(() => {
    sqsClientMock.reset();
  });
  it('should do a batch write command with the sqsClient', async () => {
    sqsClientMock.resolves({});
    await main.lambdaHandler(testEvent, {} as awsLambda.Context);
    expect(sqsClientMock.commandCalls(SendMessageBatchCommand).length).toBeGreaterThan(0);
  });
});
