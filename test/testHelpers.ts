import * as dynamodbLib from '@aws-sdk/lib-dynamodb';
import * as dynamodb from '@aws-sdk/client-dynamodb';

const dynamoClient = dynamodbLib.DynamoDBDocumentClient.from(new dynamodb.DynamoDBClient({ region: 'eu-west-1' }));

type JestAssertion = () => Promise<void> | void;

export async function repeatAssertion(funWithAssertionToRepeat: JestAssertion, maxTimes: number, waitSec: number) {
  let attempt = 1;

  while (attempt <= maxTimes) {
    try {
      await funWithAssertionToRepeat();
      console.log(`assertion passed on attempt ${attempt + 1}`);
      return;
    } catch (err) {
      if (attempt === maxTimes) {
        console.log(`assertion failed on final attempt ${attempt}, no more retries`, funWithAssertionToRepeat);
        throw err;
      }
      console.log(`assertion failed on attempt ${attempt}, retrying in ${waitSec} seconds`);
      console.log(`failed with err: ${err}`);
      await new Promise((f) => setTimeout(f, waitSec * 1000));
      attempt += 1;
    }
  }
}

export const getTableItemById = async (tableName: string, indexName: string, itemId: string): Promise<dynamodb.QueryCommandOutput> => {
  const queryCommand = new dynamodbLib.QueryCommand({
    TableName: tableName,
    KeyConditionExpression: '#pk = :pk',
    ExpressionAttributeNames: {
      '#pk': indexName
    },
    ExpressionAttributeValues: {
      ':pk': itemId
    }
  });
  console.log(`QueryCommand: ${JSON.stringify(queryCommand)}`);
  const response = await dynamoClient.send(queryCommand);
  console.log(response);
  return response;
};

export const wait = async (seconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
