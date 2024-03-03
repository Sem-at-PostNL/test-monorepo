import { generateDynamoSchema } from './schema';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { z } from 'zod';

export const eventModel = z
  .object({
    itemId: z.string().min(6),
    eventCode: z.string(),
    eventDetails: z.object({
      DateTime: z.string(),
      Event: z.any(), //busEvent,
      Sender: z.string()
    })
  })
  .strict();

export type EventModel = z.infer<typeof eventModel>;

export const eventTableItem = z
  .object({
    itemId: z.string().min(6),
    'eventCode#DateTime': z.string(),
    event: z.any(),
    sender: z.string()
  })
  .strict();

export type EventTableItem = z.infer<typeof eventTableItem>;

export const index = {
  primary: {
    partitionKey: { name: 'itemId', type: AttributeType.STRING },
    sortKey: { name: 'eventCode#DateTime', type: AttributeType.STRING }
  }
};

// The dynamodb schema
export const schema = generateDynamoSchema(index, z.object({ eventDetails: z.any() }));

export type Schema = z.infer<typeof schema>;
