# Lambdas

## Creating an independent Lambda

With independent we mean its dependencies defined in its own package.json, and installed within the lambda's folder in a node_modules folder. And the unit tests should be included in the lambda folder, instead in the main project's test folder.

## How to

### Setup the lambda folder

In case you cope the template folder, you can skip the first 3 steps and continue at step 4.

1. run `yarn init` and go through the prompts
   1. Or alternatively, use the template folder for a quickstart
2. add the root folder of the lambda to the workspaces in the project root package.json
3. add typescript development dependency: `yarn add -D typescript`
4. add dependencies to be able to run unit tests with jest from the lambda folder:
   1. `yarn add -D jest`
   2. `yarn add -D ts-jest`
   3. `yarn add -D @types/jest`
5. add the runtime dependencies on exteral libraries as usual with yarn: `yarn add <library>`
6. add the runtime dependencies on our local libraries as follows:
   1. Add an entry in the `package.json` file like this: `"@core/lambda-logging": "*"`
   2. Add the following script to the scripts entry of the `package.json`: `"build": "yarn generate-lock-entry > yarn.lock",`. This will be run when 'building' the monorepo. It generates the local yarn.lock that is needed by bundling via ESbuild.
   3. In the `tsconfig.json` file: add the path to the library to the 'references' array as well. E.g. `{ "path": "../../../bin/libs/lambda-logging" }`
   4. In the `jest.config.js` file: replace in the `transformIgnorePatterns` property the placeholder package names with the right names of the local packages used in this lambda. See [the documentation of ts-jest](https://github.com/kulshekhar/ts-jest/blob/main/TROUBLESHOOTING.md#transform-node-module-explicitly)
7. Write unit tests and put them in the test folder inside the lambda folder
8. Configure the `jest.config.ts` file at the project root, so that it will recognize the new lambda's test as jest project.
   1. It will run automatically when `npx projen test:unit` is run

### Setup the CDK construct

The CDK construct is almost the same as when we used the CDK construct for lambdas that share their dependencies with the main project.

The only difference is that you have to tell the construct that we use the Lambda's `yarn.lock` file instead of the project's root. Add the property the te lambdaProps object according to this example: `depsLockFilePath: './src/assets/lambdas/eventValueMiner/yarn.lock'`
