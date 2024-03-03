import { TableIndex } from './interfaces';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { z } from 'zod';

function attributeTypeToJsType(attributeType: AttributeType): z.ZodType {
  switch (attributeType) {
    case AttributeType.STRING:
      return z.string();
    case AttributeType.NUMBER:
      return z.number();
    case AttributeType.BINARY:
      throw new Error('Binary type not supported');
  }
}

export function generateDynamoSchema(index: TableIndex, additionalAttributesModel?: z.ZodObject<any, any>) {
  const globalSecondaries = Object.entries(index.globalSecondaries ?? {})
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(([_indexName, gsIndex]) => ({
      [gsIndex.partitionKey.name]: attributeTypeToJsType(gsIndex.partitionKey.type),
      ...(gsIndex.sortKey && { [gsIndex.sortKey.name]: attributeTypeToJsType(gsIndex.sortKey.type) })
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

  const indexObject = z.object({
    [index.primary.partitionKey.name]: attributeTypeToJsType(index.primary.partitionKey.type),
    ...(index.primary.sortKey !== undefined && { [index.primary.sortKey.name]: attributeTypeToJsType(index.primary.sortKey.type) }),
    ...globalSecondaries
  });
  if (additionalAttributesModel === undefined) {
    return indexObject.strict();
  }
  return indexObject.merge(additionalAttributesModel).strict();
}
