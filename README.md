# CBS-CORe-operational-registers

## Introduction

This is the CBS Core Operational Registers repository. It is a mono-repository containing all the necessary code and infrastructure for the application.

## For Developers

### Project Structure

The project has the following structure:

- `cdk.json`: The AWS CDK configuration file.
- `cdk.out`: The output directory for AWS CDK.
- `coverage`: Contains test coverage reports.
- `jest.config.ts`: The configuration file for Jest, our testing framework.
- `lib`: Contains compiled output of our TypeScript code.
- `src`: Contains the TypeScript source code of our application.
- `test`: Contains the test files.
- `tsconfig.json`: The TypeScript configuration file.
- `package.json`: Lists the package dependencies for the project.

### Development Process

We use the Gitflow workflow. This means that new features are developed in their own branches (feature branches), which are then merged into the `main` branch via pull requests.

We follow the Conventional Commits specification for commit messages. This means that all commit messages should be structured as follows:

```git
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
2. feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
3. BREAKING CHANGE: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
4. Others: commit types other than `fix:` and `feat:` are allowed, for example `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
5. Commits other than `fix:` and `feat:` which do not have an `!` on the type/scope do not trigger a release.
6. Commits that have `!` on the type/scope or contain `BREAKING CHANGE:` in the footer trigger a major release.

### Checkov Infrastructure Security Controls

We use an external github action to run Checkov on our infrastructure code. This is a static code analysis tool that validates our infrastructure for security best practices. We decided to blacklist some of the checks. Below we list these blacklisted checks with the reason for blacklisting:

|Checkov Rule ID|Checkov Rule Name|Reason for Blacklisting|Severity|
|---|---|---|---|
|CKV_AWS_18|Ensure AWS access logging is enabled on S3 buckets|DIY: !!Is blacklisted, but should not|LOW|
|CKV_AWS_45|Ensure Lambda function's environment variables do not expose secrets|DIY: !!Is blacklisted, but should not|HIGH|
across all services|DIY: !!Is blacklisted, but should not|HIGH|
|CKV_AWS_59|Ensure there is no open access to back-end resources through API|DIY: !!Is blacklisted, but should not|LOW|
|CKV_AWS_95|Ensure API Gateway V2 has Access Logging enabled|DIY: !!Is blacklisted, but should not|LOW|
|CKV_AWS_111|Ensure IAM policies does not allow write access without constraint|DIY: !!Is blacklisted, but should not|LOW|
|CKV_AWS_116|Ensure AWS Lambda function is configured for a DLQ|DIY: !!Is blacklisted, but should not|LOW|
|CKV_AWS_117|AWS Lambda Function is not assigned to access within VPC|We prefer to run completely without VPC|LOW|
|CKV_AWS_119|Ensure DynamoDB tables are encrypted|DIY: !!Is blacklisted, but should not|LOW|
|CKV_AWS_120|Ensure AWS API Gateway caching is enabled|DIY: !!Is blacklisted, but should not|LOW|
|CKV_AWS_158|Ensure that CloudWatch Log Group is encrypted by KMS|DIY: !!Is blacklisted, but should not|LOW|
|CKV_AWS_173|Check encryption settings for Lambda environmental variable|DIY: !!Is blacklisted, but should not|LOW|
|CKV2_AWS_33|AWS AppSync is not protected by WAF|DIY: !!Is blacklisted, but should not|LOW|
CKV_AWS_59

### Eslint Setup

We use ESLint to enforce code quality and consistency. The ESLint configuration is based on Airbnb's JavaScript style guide with some custom rules specified in the `.eslintrc` file. We also use Prettier for code formatting.

### Deployment

We use AWS CDK for infrastructure and deployment. You can find deployment scripts in the `package.json` file. To deploy the application, you can run `yarn cdk:deploy` (make sure to install AWS CDK globally first).

We also use Lerna to manage our mono-repo setup. You can run `lerna run <script>` to run a script in each package.

We chose Yarn over npm because Yarn offers improved speed, better security and supports the workspace feature which is very useful in a mono-repo setup.

## How to Contribute

1. Clone the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request
