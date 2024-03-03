import * as z from 'zod';

export const model = z.object({
  Message: z.object({
    Item: z.object({
      IdentificationNumber: z.string(),
      ExecutionPlan: z
        .object({
          Operator: z.array(
            z.object({
              // Name z.string().optional(),
              Type: z.string().optional(),
              ContractIdentificationNumber: z.string().optional()
            })
          ),
          LogisticalProduct: z.array(
            z.object({
              Type: z.string().optional(),
              Code: z.string().optional()
            })
          )
        })
        .optional(),
      Shipper: z.object({ Address: z.array(z.object({ Country: z.string().optional() })).optional() }).optional(),
      Consignee: z
        .object({
          Address: z
            .array(
              z.object({
                Country: z.string().optional(),
                Postcode: z.string().optional()
              })
            )
            .optional()
        })
        .optional(),
      Order: z.object({ CommercialProduct: z.object({ Code: z.string() }).optional() }).optional()
    }),
    Sender: z.string(),
    DateTime: z.string()
  })
});

export type Model = z.infer<typeof model>;
