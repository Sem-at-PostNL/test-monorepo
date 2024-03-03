export const lambdaContextFixture = {
  callbackWaitsForEmptyEventLoop: true,
  functionName: 'DUMMY',
  functionVersion: 'DUMMY',
  invokedFunctionArn: 'DUMMY',
  memoryLimitInMB: '',
  awsRequestId: '',
  logGroupName: '',
  logStreamName: '',
  getRemainingTimeInMillis: () => 0,
  done: () => {
    // this is intentional
  },
  fail: () => {
    // this is intentional
  },
  succeed: () => {
    // this is intentional
  }
};
