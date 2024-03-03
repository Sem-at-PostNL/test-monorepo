import { z } from "zod"

export default z.object({ "nonEmptyString": z.string().min(1).optional(), "Weight": z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Message": z.object({ "Sender": z.string().min(1), "SourceInterface": z.string().min(1).optional(), "DateTime": z.string().min(1), "Version": z.string().min(1).optional(), "RawMessage": z.string().min(1).optional(), "RoutingList": z.object({ "Routing": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Number": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "NextComponent": z.string().optional(), "Component": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }), z.array(z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }) }), z.array(z.object({ "Number": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "NextComponent": z.string().optional(), "Component": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }), z.array(z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }) }).optional(), "Event": z.object({ "DateTime": z.string().min(1), "Source": z.string().min(1), "OriginalSource": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional(), "EventGroup": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Location": z.object({ "Code": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "Address": z.object({ "Country": z.string().min(1).optional() }).optional(), "GeoJson": z.object({ "Type": z.string().min(1), "Coordinates": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Content": z.string().min(1) }), z.array(z.object({ "Content": z.string().min(1) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional() }).optional(), "SourceProcess": z.object({ "Name": z.string().min(1).optional(), "Code": z.string().min(1).optional() }).optional(), "Grouping": z.object({ "AggregationLevelType": z.string().min(1), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Children": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1), "TrackingNumber": z.string().min(1) }), z.array(z.object({ "AggregationLevelType": z.string().min(1), "TrackingNumber": z.string().min(1) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "OriginAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "DestinationAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "Status": z.string().min(1).optional() }).optional(), "FlatGrouping": z.object({ "Grouping": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1), "AggregationLevel": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }), z.array(z.object({ "AggregationLevelType": z.string().min(1), "AggregationLevel": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Item": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "OriginAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "DestinationAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional() }).optional(), "Item": z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional(), "AlternativeIdentification": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Client": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }).optional(), "Shipper": z.object({ "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }), z.array(z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Consignee": z.object({ "Name": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.record(z.any()), z.array(z.record(z.any()))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Weight": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "DangerousGoods": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Import": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Export": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Undeliverable": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional() }) }).optional(), "RoutingList": z.object({ "Routing": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Number": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "NextComponent": z.string().optional(), "Component": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }), z.array(z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }) }), z.array(z.object({ "Number": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "NextComponent": z.string().optional(), "Component": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }), z.array(z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }) }).optional(), "Routing": z.object({ "Number": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "NextComponent": z.string().optional(), "Component": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }), z.array(z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }) }).optional(), "Component": z.object({ "Name": z.string().min(1), "Sequence": z.number().int().gte(-9223372036854776000).lte(9223372036854776000), "DateTime": z.string() }).optional(), "Event": z.object({ "DateTime": z.string().min(1), "Source": z.string().min(1), "OriginalSource": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional(), "EventGroup": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Location": z.object({ "Code": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "Address": z.object({ "Country": z.string().min(1).optional() }).optional(), "GeoJson": z.object({ "Type": z.string().min(1), "Coordinates": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Content": z.string().min(1) }), z.array(z.object({ "Content": z.string().min(1) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional() }).optional(), "SourceProcess": z.object({ "Name": z.string().min(1).optional(), "Code": z.string().min(1).optional() }).optional(), "Grouping": z.object({ "AggregationLevelType": z.string().min(1), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Children": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1), "TrackingNumber": z.string().min(1) }), z.array(z.object({ "AggregationLevelType": z.string().min(1), "TrackingNumber": z.string().min(1) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "OriginAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "DestinationAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "Status": z.string().min(1).optional() }).optional(), "FlatGrouping": z.object({ "Grouping": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1), "AggregationLevel": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }), z.array(z.object({ "AggregationLevelType": z.string().min(1), "AggregationLevel": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Item": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "OriginAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "DestinationAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional() }).optional(), "Item": z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional(), "AlternativeIdentification": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Client": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }).optional(), "Shipper": z.object({ "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }), z.array(z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Consignee": z.object({ "Name": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.record(z.any()), z.array(z.record(z.any()))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Weight": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "DangerousGoods": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Import": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Export": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Undeliverable": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional() }).optional(), "EventGroup": z.object({ "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Location": z.object({ "Code": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "Address": z.object({ "Country": z.string().min(1).optional() }).optional(), "GeoJson": z.object({ "Type": z.string().min(1), "Coordinates": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Content": z.string().min(1) }), z.array(z.object({ "Content": z.string().min(1) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional() }).optional(), "Address": z.object({ "Country": z.string().min(1).optional() }).optional(), "GeoJson": z.object({ "Type": z.string().min(1), "Coordinates": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Content": z.string().min(1) }), z.array(z.object({ "Content": z.string().min(1) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Coordinates": z.object({ "Content": z.string().min(1) }).optional(), "SourceProcess": z.object({ "Name": z.string().min(1).optional(), "Code": z.string().min(1).optional() }).optional(), "Grouping": z.object({ "AggregationLevelType": z.string().min(1), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Children": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1), "TrackingNumber": z.string().min(1) }), z.array(z.object({ "AggregationLevelType": z.string().min(1), "TrackingNumber": z.string().min(1) }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "OriginAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "DestinationAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "Status": z.string().min(1).optional() }).optional(), "Children": z.object({ "AggregationLevelType": z.string().min(1), "TrackingNumber": z.string().min(1) }).optional(), "OriginAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "DestinationAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "FlatGrouping": z.object({ "Grouping": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1), "AggregationLevel": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }), z.array(z.object({ "AggregationLevelType": z.string().min(1), "AggregationLevel": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Item": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "OriginAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "DestinationAddress": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional() }).optional(), "Grouping_1": z.object({ "AggregationLevelType": z.string().min(1), "AggregationLevel": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1), "Mixed": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Item": z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional() }).optional(), "OriginAddress_1": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "DestinationAddress_1": z.object({ "Name": z.string().min(1).optional(), "Addressline1": z.string().min(1).optional(), "Addressline2": z.string().min(1).optional(), "City": z.string().min(1).optional(), "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "State": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Warehouse": z.string().min(1).optional() }).optional(), "Item_1": z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().optional(), "AlternativeIdentification": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Client": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }).optional(), "Shipper": z.object({ "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }), z.array(z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Consignee": z.object({ "Name": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.record(z.any()), z.array(z.record(z.any()))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Weight": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "DangerousGoods": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Import": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Export": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "Undeliverable": z.any().superRefine((x, ctx) => {
    const schemas = [z.boolean(), z.number().int().gte(0).lte(1)];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "AlternativeIdentification": z.object({ "IdentificationNumber": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Client": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }).optional(), "Shipper": z.object({ "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }), z.array(z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Address_1": z.object({ "Zip": z.string().min(1).optional(), "Country": z.string().min(1).optional() }).optional(), "Consignee": z.object({ "Name": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.record(z.any()), z.array(z.record(z.any()))];
    const errors = schemas.reduce(
      (errors: z.ZodError[], schema) =>
        ((result) => ("error" in result ? [...errors, result.error] : errors))(
          schema.safeParse(x)
        ),
      []
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional() }).optional(), "Address_2": z.record(z.any()).optional() }).and(z.union([z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any()])).describe("Schema tag attributes: xmlns:xs='http://www.w3.org/2001/XMLSchema'")
