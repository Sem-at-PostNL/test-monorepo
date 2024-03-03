import { generateDynamoSchema } from './schema';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { z } from 'zod';

export enum ItemState {
  IN_TRANSIT = 'inTransit',
  NOT_IN_TRANSIT = 'notInTransit',
  PREADVICED = 'preadviced'
}

export const ingestItemModel = z
  .object({
    itemId: z.string(),
    itemDetails: z.object({
      Message: z.object({
        DateTime: z.string(),
        Item: z.any(),
        Sender: z.string()
      })
    })
  })
  .strict();

export type IngestItemModel = z.infer<typeof ingestItemModel>;

export const ingestUndeliverableItemModel = z.object({
  itemId: z.string().min(6).max(40),
  Undeliverable: z.boolean()
});

export type IngestUndeliverableItemModel = z.infer<typeof ingestUndeliverableItemModel>;

export const index = {
  primary: {
    partitionKey: { name: 'itemId', type: AttributeType.STRING }
  }
};

// The dynamodb schema
export const schema = generateDynamoSchema(index, z.object({ itemDetails: z.any() }));

export type Schema = z.infer<typeof schema>;
