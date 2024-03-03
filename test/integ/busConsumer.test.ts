import * as uuid from 'uuid';
import * as parameters from '../../src/bin/parameters';
import { getStageByBranch, getBranch } from '../../src/stage';
import { SSMClient } from '@aws-sdk/client-ssm';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import * as itemTable from 'interfaces/src/dynamo/item';
import * as testHelpers from '../testHelpers';
import { BusConsumerKafkaEvent } from 'interfaces/src/bus/kafka';

const lambdaClient = new LambdaClient({ region: 'eu-west-1' });

jest.mock('@aws-lambda-powertools/logger');

type BusConsumerEnvironmentParameters = { itemTableName: string; lambdaFunctionName: string; ingestionMapperQueueUrl: string };

describe('When an item message is send to the Busconsumer Lambda', () => {
  let params: BusConsumerEnvironmentParameters;
  const itemId = uuid.v4(); //this string is unique on each run.
  const harmonizedItem = {
    IdentificationNumber: itemId,
    ExecutionPlan: { Operator: { Type: 'Carrier', Name: 'testcarrier' } },
    ItemOwner: 'testowner',
    Shipper: { Country: 'testshippercountry' },
    Consignee: { Address: { CountryCode: 'testcountry', PostalCode: 'testpostcode' } },
    Order: { CommercialProduct: { ProductCode: 'testproductcode' } }
  };
  const itemAsBase64String = Buffer.from(
    JSON.stringify({
      Message: {
        Item: harmonizedItem
      }
    })
  ).toString('base64');

  beforeAll(async () => {
    const branch = getBranch();
    console.log(`Branch: ${branch}`);
    const stage = getStageByBranch();
    console.log(`Stage: ${stage.toString()}`);
    const ssmClient = new SSMClient({ region: 'eu-west-1' });
    const paramClient = new parameters.ParameterClient(stage, ssmClient, branch);

    params = await paramClient.retrieveParameters({
      lambdaFunctionName: parameters.ParameterRegistry.core_itemBusConsumer_lambdaFunctionName,
      itemTableName: parameters.ParameterRegistry.core_Item_tableName,
      ingestionMapperQueueUrl: parameters.ParameterRegistry.core_IngestionMapper_sourceQueueUrl
    });
    console.log(`lambdaFunctionName: ${params.lambdaFunctionName}`);

    const testKafkaEvent: BusConsumerKafkaEvent = {
      records: {
        ['topic-partition']: [
          {
            topic: 'test-topic',
            timestamp: 123,
            timestampType: 'CREATE_TIME',
            value: itemAsBase64String
          }
        ]
      },
      busConsumerTargetQueue: params.ingestionMapperQueueUrl
    };

    const invokeResponse = await lambdaClient.send(new InvokeCommand({ FunctionName: params.lambdaFunctionName, Payload: JSON.stringify(testKafkaEvent) }));
    if (invokeResponse.StatusCode !== 200) {
      throw new Error(`Invoke failed with status code ${invokeResponse.StatusCode}`);
    }
  });

  it('should be processed to the item table', async () => {
    await testHelpers.getTableItemById(params.itemTableName, itemTable.index.primary.partitionKey.name, itemId);
  });
});
