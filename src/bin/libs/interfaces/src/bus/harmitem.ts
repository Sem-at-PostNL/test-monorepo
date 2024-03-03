import { z } from "zod"

export default z.object({ "Root": z.any().optional(), "Message": z.object({ "Sender": z.string().min(1), "DateTime": z.string().min(1), "Version": z.string().min(1).optional(), "RawMessage": z.string().min(1).optional(), "Item": z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().min(1).optional(), "AlternativeIdentification": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1), "Type": z.string().min(1).optional(), "Source": z.string().min(1).optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1), "Type": z.string().min(1).optional(), "Source": z.string().min(1).optional() }))];
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
  }).optional(), "Order": z.object({ "CommercialProduct": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialProductOld": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialService": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "CommercialServiceOld": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }), z.array(z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }))];
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
  }).optional(), "Bundle": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "PaymentMethod": z.string().min(1).optional() }).optional(), "ExecutionPlan": z.object({ "LogisticalProduct": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional() }), z.array(z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional() }))];
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
  }), "Operator": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional(), "InputFlow": z.string().min(1).optional() }).optional(), "Client": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Shipper": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Consignee": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional(), "Dimensions": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Length": z.string().min(1).optional(), "Width": z.string().min(1).optional(), "Height": z.string().min(1).optional(), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Length": z.string().min(1).optional(), "Width": z.string().min(1).optional(), "Height": z.string().min(1).optional(), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Values": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Value": z.string().min(1), "Currency": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Value": z.string().min(1), "Currency": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Cleared": z.any().superRefine((x, ctx) => {
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
  }).optional(), "Event": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "DateTime": z.string().min(1).optional(), "Source": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional() }), z.array(z.object({ "DateTime": z.string().min(1).optional(), "Source": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional() }))];
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
  }).optional(), "FlatGrouping": z.object({ "Grouping": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional() }) }).optional(), "Item": z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().min(1).optional(), "AlternativeIdentification": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1), "Type": z.string().min(1).optional(), "Source": z.string().min(1).optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1), "Type": z.string().min(1).optional(), "Source": z.string().min(1).optional() }))];
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
  }).optional(), "Order": z.object({ "CommercialProduct": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialProductOld": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialService": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "CommercialServiceOld": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }), z.array(z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }))];
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
  }).optional(), "Bundle": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "PaymentMethod": z.string().min(1).optional() }).optional(), "ExecutionPlan": z.object({ "LogisticalProduct": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional() }), z.array(z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional() }))];
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
  }), "Operator": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional(), "InputFlow": z.string().min(1).optional() }).optional(), "Client": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Shipper": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Consignee": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional(), "Dimensions": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Length": z.string().min(1).optional(), "Width": z.string().min(1).optional(), "Height": z.string().min(1).optional(), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Length": z.string().min(1).optional(), "Width": z.string().min(1).optional(), "Height": z.string().min(1).optional(), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Values": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Value": z.string().min(1), "Currency": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Value": z.string().min(1), "Currency": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Cleared": z.any().superRefine((x, ctx) => {
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
  }).optional(), "Event": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "DateTime": z.string().min(1).optional(), "Source": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional() }), z.array(z.object({ "DateTime": z.string().min(1).optional(), "Source": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional() }))];
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
  }).optional(), "FlatGrouping": z.object({ "Grouping": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional() }).optional(), "AlternativeIdentification": z.object({ "IdentificationNumber": z.string().min(1), "Type": z.string().min(1).optional(), "Source": z.string().min(1).optional() }).optional(), "Order": z.object({ "CommercialProduct": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialProductOld": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialService": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "CommercialServiceOld": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }), z.array(z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }))];
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
  }).optional(), "Bundle": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "PaymentMethod": z.string().min(1).optional() }).optional(), "CommercialProduct": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialProductOld": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialService": z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }).optional(), "CommercialServiceOld": z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }).optional(), "Bundle": z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }).optional(), "ExecutionPlan": z.object({ "LogisticalProduct": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional() }), z.array(z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional() }))];
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
  }), "Operator": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional(), "InputFlow": z.string().min(1).optional() }).optional(), "LogisticalProduct": z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional() }).optional(), "Operator": z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }).optional(), "Client": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Address": z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }).optional(), "Recipient": z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }).optional(), "Building": z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "ContactInformation": z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "PhoneNumber": z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }).optional(), "Shipper": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Address_1": z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }).optional(), "Recipient_1": z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }).optional(), "Building_1": z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "ContactInformation_1": z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "PhoneNumber_1": z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }).optional(), "Consignee": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Address_2": z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }).optional(), "Recipient_2": z.object({ "Name": z.string().min(1), "Type": z.string().min(1) }).optional(), "Building_2": z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "ContactInformation_2": z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "PhoneNumber_2": z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }).optional(), "Weight": z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Dimensions": z.object({ "Length": z.string().min(1).optional(), "Width": z.string().min(1).optional(), "Height": z.string().min(1).optional(), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Values": z.object({ "Value": z.string().min(1), "Currency": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Event": z.object({ "DateTime": z.string().min(1).optional(), "Source": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional() }).optional(), "FlatGrouping": z.object({ "Grouping": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Grouping": z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }).optional(), "Item_1": z.object({ "IdentificationNumber": z.string().min(1), "ItemOwner": z.string().min(1).optional(), "AlternativeIdentification": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "IdentificationNumber": z.string().min(1), "Type": z.string().min(1).optional(), "Source": z.string().min(1).optional() }), z.array(z.object({ "IdentificationNumber": z.string().min(1), "Type": z.string().min(1).optional(), "Source": z.string().min(1).optional() }))];
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
  }).optional(), "Order": z.object({ "CommercialProduct": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialProductOld": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialService": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "CommercialServiceOld": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }), z.array(z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }))];
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
  }).optional(), "Bundle": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "PaymentMethod": z.string().min(1).optional() }).optional(), "ExecutionPlan": z.object({ "LogisticalProduct": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }), z.array(z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }))];
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
  }), "Operator": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional(), "InputFlow": z.string().min(1).optional() }).optional(), "Client": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Shipper": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Consignee": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional(), "Dimensions": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Length": z.string().min(1).optional(), "Width": z.string().min(1).optional(), "Height": z.string().min(1).optional(), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Length": z.string().min(1).optional(), "Width": z.string().min(1).optional(), "Height": z.string().min(1).optional(), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Values": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Value": z.string().min(1), "Currency": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Value": z.string().min(1), "Currency": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Cleared": z.any().superRefine((x, ctx) => {
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
  }).optional(), "Event": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "DateTime": z.string().min(1).optional(), "Source": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional() }), z.array(z.object({ "DateTime": z.string().min(1).optional(), "Source": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional() }))];
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
  }).optional(), "FlatGrouping": z.object({ "Grouping": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional() }).optional(), "AlternativeIdentification_1": z.object({ "IdentificationNumber": z.string().min(1), "Type": z.string().min(1).optional(), "Source": z.string().min(1).optional() }).optional(), "Order_1": z.object({ "CommercialProduct": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialProductOld": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialService": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "CommercialServiceOld": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }), z.array(z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }))];
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
  }).optional(), "Bundle": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }), z.array(z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }))];
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
  }).optional(), "PaymentMethod": z.string().min(1).optional() }).optional(), "CommercialProduct_1": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialProductOld_1": z.object({ "Type": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "CommercialService_1": z.object({ "Group": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ValueCode": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }).optional(), "CommercialServiceOld_1": z.object({ "FeatureType": z.string().min(1), "OptionType": z.string().min(1) }).optional(), "Bundle_1": z.object({ "Code": z.string().min(1), "Description": z.string().min(1).optional(), "ChargeCode": z.string().min(1).optional() }).optional(), "ExecutionPlan_1": z.object({ "LogisticalProduct": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }), z.array(z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }))];
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
  }), "Operator": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional(), "InputFlow": z.string().min(1).optional() }).optional(), "LogisticalProduct_1": z.object({ "Category": z.string().min(1).optional(), "Line": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Kind": z.string().min(1).optional(), "Code": z.string().min(1), "Description": z.string().min(1).optional() }).optional(), "Operator_1": z.object({ "Type": z.string().min(1).optional(), "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "ContractIdentificationNumber": z.string().min(1).optional() }).optional(), "Client_1": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Address_3": z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }).optional(), "Recipient_3": z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }).optional(), "Building_3": z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "ContactInformation_3": z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "PhoneNumber_3": z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }).optional(), "Shipper_1": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Address_4": z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }).optional(), "Recipient_4": z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }).optional(), "Building_4": z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "ContactInformation_4": z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "PhoneNumber_4": z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }).optional(), "Consignee_1": z.object({ "Name": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Address": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }), z.array(z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }))];
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
  }).optional(), "ContactInformation": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Address_5": z.object({ "Role": z.string().min(1).optional(), "Recipient": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Building": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }), z.array(z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }))];
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
  }).optional(), "Type": z.string().min(1).optional(), "StreetNumber": z.string().min(1).optional(), "StreetNumberAddition": z.string().min(1).optional(), "StreetName": z.string().min(1).optional(), "StreetType": z.string().min(1).optional(), "District": z.string().min(1).optional(), "Town": z.string().min(1).optional(), "Region": z.string().min(1).optional(), "Postcode": z.string().min(1).optional(), "Country": z.string().min(1).optional(), "Remark": z.string().min(1).optional() }).optional(), "Recipient_5": z.object({ "Name": z.string().min(1), "Type": z.string().min(1).optional() }).optional(), "Building_5": z.object({ "Name": z.string().min(1).optional(), "Number": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "ContactInformation_5": z.object({ "Type": z.string().min(1).optional(), "Email": z.string().min(1).optional(), "PhoneNumber": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }), z.array(z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "PhoneNumber_5": z.object({ "Type": z.string().min(1).optional(), "DialNumber": z.string().min(1).optional() }).optional(), "Weight_1": z.object({ "Weight": z.string().min(1), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Dimensions_1": z.object({ "Length": z.string().min(1).optional(), "Width": z.string().min(1).optional(), "Height": z.string().min(1).optional(), "Unit": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Values_1": z.object({ "Value": z.string().min(1), "Currency": z.string().min(1).optional(), "Type": z.string().min(1).optional() }).optional(), "Event_1": z.object({ "DateTime": z.string().min(1).optional(), "Source": z.string().min(1).optional(), "Type": z.string().min(1).optional(), "Code": z.string().min(1).optional(), "Description": z.string().min(1).optional(), "Reason": z.string().min(1).optional(), "Resolution": z.string().min(1).optional(), "ResolutionReason": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional(), "IdentificationNumberAggregationType": z.string().min(1).optional() }).optional(), "FlatGrouping_1": z.object({ "Grouping": z.any().superRefine((x, ctx) => {
    const schemas = [z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }), z.array(z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }))];
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
  }).optional() }).optional(), "Grouping_1": z.object({ "AggregationLevelType": z.string().min(1).optional(), "IdentificationNumber": z.string().min(1).optional() }).optional(), "nonEmptyString": z.string().min(1).optional() }).and(z.union([z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any(), z.any()])).describe("Schema tag attributes: xmlns:xs='http://www.w3.org/2001/XMLSchema'")
