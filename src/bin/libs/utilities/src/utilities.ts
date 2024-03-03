/**
 * Hashes a string. Taken from
 * https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
 * @param stringToHash The string to "hash"
 * @returns A hash for the string
 */
export const hashString = (stringToHash: string) => {
  let hash = 0,
    i = 0,
    len = stringToHash.length;
  while (i < len) {
    // eslint-disable-next-line no-bitwise
    hash = ((hash << 5) - hash + stringToHash.charCodeAt(i++)) << 0;
  }
  return hash.toString();
};

export const sleepForXSeconds = async (seconds: number, loggerFunction: Function): Promise<void> => {
  loggerFunction(`start sleep for ${seconds} seconds`);
  await new Promise((f) => setTimeout(f, seconds * 1000));
  loggerFunction(`finished sleep for ${seconds} seconds`);
};

export const catchExpectedError = async function (functionToBeCalled: CallableFunction, event: any, context?: any) {
  try {
    await functionToBeCalled(event, context);
  } catch (err: any) {
    return err.message;
  }
};
export const catchExpectedErrorSync = function (functionToBeCalled: CallableFunction, event: any, context?: any) {
  try {
    functionToBeCalled(event, context);
  } catch (err: any) {
    return err.message;
  }
};
export const cloneJson = (obj: any) => JSON.parse(JSON.stringify(obj));

export const getFn = (p: Array<any>, o: any) => p.reduce((xs, x) => (xs && xs[x] !== undefined ? xs[x] : null), o);
export const isJSON = (str: string): boolean => {
  try {
    const json = JSON.parse(str);
    if (Object.prototype.toString.call(json).slice(8, -1) !== 'Object') {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

// because the input has some stringified json, we use this function
export const parseIfJson = (item: any) => {
  let i = typeof item !== 'string' ? JSON.stringify(item) : item;
  try {
    i = JSON.parse(i);
  } catch (e) {
    return item;
  }
  if (typeof i === 'object' && i !== null) return i;
  return item;
};

/**
 * Require either of the properties in type
 * e.g. type ObjectDefinitionWithOneOfDefinedKeys = RequireOnlyOne<ObjectDefinition, 'keyA' | 'keyB'>
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

/**
 * Chop array into batches of batchSize
 */
export const chopArray = <T extends any[]>(inputArray: T, batchSize: number): T[] =>
  inputArray.reduce((batchArray, record, index) => {
    const batchIndex = Math.floor(index / batchSize);
    batchArray[batchIndex] = batchArray[batchIndex] ? [...batchArray[batchIndex], record] : [record];
    return batchArray;
  }, []);

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

/**
 * @returns [valid, invalid]
 */
export const splitArrayOnValidity = <T extends any[]>(array: T, isValid: (elem: ArrayElement<T>) => boolean): [T, T] =>
  array.reduce(([pass, fail], elem) => (isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]), [[], []]);

/**
 * Construct a start- and end ISO timestamp, representing the partition key of the expectation table's  Global Secondary Index (GSI)
 * @param date The date of the event to construct the expirationWindow for
 * @returns e.g. "2022-06-23T15:50:00.000Z_2022-06-23T15:55:00.000Z"
 */
export const getExpirationWindow = (date: Date) => {
  // a coefficient used to round to the nearest 5 minutes (the number of milliseconds in 5 minutes)
  const numberOfMsIn5Min = 1000 * 60 * 5;
  // Subtract a second to make sure that floor and ceil give different results for a time of 12:00
  const expirationDateMinus1 = new Date(date.getTime());
  expirationDateMinus1.setSeconds(expirationDateMinus1.getSeconds() - 1);

  const endWindow = new Date(Math.ceil(date.getTime() / numberOfMsIn5Min) * numberOfMsIn5Min).toISOString();
  const startWindow = new Date(Math.floor(expirationDateMinus1.getTime() / numberOfMsIn5Min) * numberOfMsIn5Min).toISOString();
  return startWindow + '_' + endWindow;
};
