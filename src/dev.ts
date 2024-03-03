import { StageStack, EnvironmentStage, getBranch } from './stage';
import { Core, CoreStackProps } from './lib/collections/core';
import { Construct } from 'constructs';
import * as constants from './constants';

const branchName = getBranch();

interface DevCoreStackProps extends CoreStackProps {
  enableOpensearch: boolean;
}

export class Dev extends StageStack {
  constructor(scope: Construct, props: DevCoreStackProps) {
    super(scope, `${branchName}-dev`, { ...props, env: constants.DEV_AWS_ENV });

    const core = new Core(this, {
      environment: EnvironmentStage.DEV,
      logLevel: 'DEBUG',
      singletonInfra: props.singletonInfra
    });
    core.configureForDev();

    if (props.enableOpensearch) {
      core.enableOpensearch(EnvironmentStage.DEV);
    }
  }
}
