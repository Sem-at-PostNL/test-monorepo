import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

interface Key {
  name: string;
  type: dynamodb.AttributeType;
}

interface Index {
  partitionKey: Key;
  sortKey?: Key;
}

export interface TableIndex {
  primary: Index;
  globalSecondaries?: Record<string, Index>;
}

export const MISSING_DATA = '';
