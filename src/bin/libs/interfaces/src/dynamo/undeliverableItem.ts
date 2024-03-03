import { z } from 'zod';

export const undeliverableItemModel = z.object({
  itemId: z.string(),
  Undeliverable: z.boolean()
});

export type UndeliverableItemModel = z.infer<typeof undeliverableItemModel>;
