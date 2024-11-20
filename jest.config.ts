/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
      "^@/(.*)$": ["<rootDir>/$1"]
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/singleton.ts'],

  // The test environment that will be used for testing
  testEnvironment: "node",
  globals: {
    __USER__: {id: 123, birthday: '1/1/2000'}
  }
};

export default createJestConfig(config);
