import type { Config } from 'jest';

const config: Config = {
  displayName: 'integTests',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 180000,
  rootDir: './../..',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {},
    ],
  },
  testMatch: ['<rootDir>/test/integ/**/*.test.ts'],
  extensionsToTreatAsEsm: ['.ts'],
};

export default config;