import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LPEPermissionBoundary } from './lib/cdkAspects/lpePermissionBoundaryAspect';
import { LambdaConcurrencyReservationDefaultsTo10 } from './lib/cdkAspects/lambdaConcurrencyReservationAspects';
import { execSync } from 'child_process';

export enum EnvironmentStage {
  DEV = 'dev',
  PROD = 'prod',
  ACC = 'acc'
}

export enum HostedZoneName {
  prod = 'p048.aws.cldsvc.net',
  acc = 'a048.aws.cldsvc.net',
  dev = 'd048.aws.cldsvc.net'
}

export enum IPsetArn {
  prod = 'arn:aws:wafv2:eu-west-1:681417356507:regional/ipset/lpe-tst-akamai-prod-ip-set/f773ed0f-d016-439d-8f7d-ea75278de2f5',
  acc = 'arn:aws:wafv2:eu-west-1:180996887025:regional/ipset/lpe-tst-akamai-prod-ip-set/e9eca0e5-6d91-41f3-b6d3-c48772524090',
  dev = 'arn:aws:wafv2:eu-west-1:236777436536:regional/ipset/lpe-tst-akamai-prod-ip-set/a829c925-45c4-4c27-91c3-8744cb992028'
}

export enum EMPAccountId {
  prod = '126533501204',
  acc = '523333310227',
  dev = '583968248784'
}

export enum CoreAccountId {
  prod = '681417356507',
  acc = '180996887025',
  dev = '236777436536'
}
export function getBranch(): string {
  try {
    const stdout = execSync('git rev-parse --abbrev-ref HEAD');
    return stdout.toString().trim().split('/').pop()!;
  } catch (err) {
    throw new Error(String(err));
  }
}

export function getStageByBranch(): EnvironmentStage {
  const branchName = getBranch();
  switch (branchName) {
    case 'main':
      return EnvironmentStage.PROD;
    default:
      return EnvironmentStage.DEV;
  }
}

export const getOpenSearchProofBranchTag = (): string => {
  return `${getBranch().substring(0, 8).toLowerCase()}`;
};

export const isDeployedFromPipeline = (): boolean => {
  return process.env.CI === 'true';
};

export type NonProdStage = EnvironmentStage.DEV | EnvironmentStage.ACC;
interface StageProps extends cdk.StackProps {
  env: {
    account: string;
    region: string;
  };
}
export class StageStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: StageProps) {
    super(scope, id, props);
    cdk.Aspects.of(this).add(new LPEPermissionBoundary(`arn:aws:iam::${props.env.account}:policy/lpe-base-permissions-boundary`));
    cdk.Aspects.of(this).add(new LambdaConcurrencyReservationDefaultsTo10());
  }
}
