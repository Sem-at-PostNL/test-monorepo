import { ZodError } from 'zod';

export class ValidationError extends Error {
  zodError: ZodError;

  constructor(validationReason: string, zodError: ZodError, contextInfo?: any) {
    super(`${validationReason}\n${zodError.message}\n${JSON.stringify(contextInfo, null, 2)}`);
    this.name = 'ValidationError';
    this.zodError = zodError;
  }
}
