import { generateDynamoSchema } from './schema';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { z } from 'zod';

export enum ItemState {
  IN_TRANSIT = 'inTransit',
  NOT_IN_TRANSIT = 'notInTransit',
  PREADVICED = 'preadviced'
}

// The model of the data that comes from Item messages
export const itemModel = z
  .object({
    itemId: z.string(),
    carrier: z.string(),
    shipperCountry: z.string().optional(),
    consignee: z.object({
      country: z.string(),
      postcode: z.string().optional()
    }),
    productCode: z.string()
  })
  .strict();

export type ItemModel = z.infer<typeof itemModel>;

export const inTransitModel = z.object({
  eventCode: z.string(),
  itemId: z.string()
});
export type InTransitModel = z.infer<typeof inTransitModel>;

export const useCasePartitionKey = {
  name: 'itemState#carrier#productCode#destCountry',
  type: AttributeType.STRING
};
export const index = {
  primary: {
    partitionKey: { name: 'itemId', type: AttributeType.STRING }
  },
  globalSecondaries: {
    ['origin']: {
      partitionKey: useCasePartitionKey,
      sortKey: { name: 'shipperCountry#itemId', type: AttributeType.STRING }
    },
    ['destination']: {
      partitionKey: useCasePartitionKey,
      sortKey: { name: 'postcode#itemId', type: AttributeType.STRING }
    }
  }
};

// The dynamodb schema
export const schema = generateDynamoSchema(index, z.object({ ttl: z.number(), lastEventDateTime: z.string() }));

export type Schema = z.infer<typeof schema>;
