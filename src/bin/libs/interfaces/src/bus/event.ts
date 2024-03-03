import * as zod from 'zod';

const itemModel = zod.object({
  IdentificationNumber: zod.string()
});

const eventModel = zod.object({
  Code: zod.string(),
  DateTime: zod.string().min(1),
  Source: zod.string().min(1),
  Item: itemModel.optional()
});

export const model = zod.object({
  Event: eventModel,
  Sender: zod.string().min(1),
  DateTime: zod.string().min(1)
});

export type Model = zod.infer<typeof model>;
