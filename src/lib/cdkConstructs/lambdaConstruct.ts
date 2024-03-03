import * as cdk from 'aws-cdk-lib';
import { TreatMissingData } from 'aws-cdk-lib/aws-cloudwatch';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import { AlarmConstruct } from './alarmConstruct';
import { EnvironmentStage } from '../../stage';
import path from 'path';

const ASSETS_FOLDER = './src/assets';

interface Entry {
  lambdaPackageName: string;
  handlerFilepath: string;
}
export type DefaultNodeJsLambdaFunctionProps = {
  entry: Entry;
  environment?: { [key: string]: string };
  componentName: string;
  logLevel: string;
  errorThreshold?: number;
  description?: string;
  reservedConcurrentExecutions?: number;
  timeout?: cdk.Duration;
  xrayEnabled: boolean;
  stage: EnvironmentStage;
};

export class DefaultNodeJsLambdaFunction extends Construct {
  public lambdaFunction: lambdaNodejs.NodejsFunction;

  constructor(scope: Construct, id: string, props: DefaultNodeJsLambdaFunctionProps) {
    super(scope, id);

    const metricLogGroup = new logs.LogGroup(this, 'metricsLogGroup', {
      retention: logs.RetentionDays.TWO_WEEKS,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const functionLogGroup = new logs.LogGroup(this, 'functionLogGroup', {
      retention: logs.RetentionDays.TWO_WEEKS,
      removalPolicy: props.stage == EnvironmentStage.DEV ? cdk.RemovalPolicy.DESTROY : cdk.RemovalPolicy.RETAIN
    });

    // In dev it is easy to get to the max reservedConcurrent execution limit, so default to concurrency of 1 on dev is better.
    const reservedConcurrentExecutions = props.stage === EnvironmentStage.DEV ? 1 : props.reservedConcurrentExecutions;

    console.log('path ', path.join(ASSETS_FOLDER, 'lambdas', props.entry.lambdaPackageName, props.entry.handlerFilepath));
    this.lambdaFunction = new lambdaNodejs.NodejsFunction(this, id, {
      description: props.description || `${props.componentName} Function`,
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'lambdaHandler',
      entry: path.join(ASSETS_FOLDER, 'lambdas', props.entry.lambdaPackageName, props.entry.handlerFilepath),
      tracing: props.xrayEnabled ? lambda.Tracing.PASS_THROUGH : lambda.Tracing.DISABLED,
      timeout: props.timeout || cdk.Duration.seconds(30),
      memorySize: 1024,
      architecture: lambda.Architecture.ARM_64,
      reservedConcurrentExecutions: reservedConcurrentExecutions || 20,
      logGroup: functionLogGroup,
      environment: {
        STAGE: props.stage.toString(),
        LOG_LEVEL: props.logLevel,
        /** AWS_EMF_LOG_GROUP_NAME is automatically detected by the aws-embedded-metrics library */
        AWS_EMF_LOG_GROUP_NAME: metricLogGroup.logGroupName,
        ...props.environment
      }
    });

    new AlarmConstruct(this, 'HighFunctionErrorAlarm', {
      metric: this.lambdaFunction.metric('Errors', { statistic: 'Sum' }),
      alarmProps: {
        threshold: Number(props.errorThreshold) || 30,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.IGNORE
      },
      alarmTopic: 'high',
      okAction: true
    });

    const metricFilter = new logs.MetricFilter(this, 'CaughtErrorsMetricFilter', {
      metricNamespace: `LambdaMetrics/${id}`,
      metricName: 'CaughtErrors',
      logGroup: this.lambdaFunction.logGroup,
      filterPattern: logs.FilterPattern.stringValue('$._loglevel', '=', 'error'),
      metricValue: '1'
    });

    new AlarmConstruct(this, 'FunctionCaughtErrorAlarm', {
      metric: metricFilter.metric(),
      alarmProps: {
        threshold: Number(props.errorThreshold) || 30,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.IGNORE
      },
      alarmTopic: 'high',
      okAction: props.stage === EnvironmentStage.DEV ? false : true
    });
  }
}
