import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DefaultNodeJsLambdaFunction } from '../cdkConstructs/lambdaConstruct';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import { StartingPosition } from 'aws-cdk-lib/aws-lambda';
import { EnvironmentStage } from '../../stage';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { generateParameterName } from '../../bin/parameters';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Type as BusEventType } from '@core/interfaces/src/bus/types';

const ID = 'BusConsumer';

type EnvFunctionProps = {
  logLevel: string;
  errorThreshold?: number;
  xrayEnabled: boolean;
  stage: EnvironmentStage;
};

interface KafkaSourceConfigProps {
  topicName: string;
  batchSize?: number;
  startingPosition?: StartingPosition;
  maxBatchingWindow?: cdk.Duration;
  clientCertSecret: secretsmanager.ISecret;
  serverCertSecret: secretsmanager.ISecret;
  bootstrapServers: string[];
}

export class BusTopicConsumer extends Construct {
  public readonly lambdaFunction: lambdaNodejs.NodejsFunction;

  constructor(scope: Construct, eventType: BusEventType, busConsumerLambdaProps: EnvFunctionProps) {
    const eventTypeString = eventType.toString();
    super(scope, `${eventTypeString}${ID}`);

    const lambda = new DefaultNodeJsLambdaFunction(this, 'Lambda', {
      componentName: ID,
      entry: {
        handlerFilepath: 'src/handler.ts',
        lambdaPackageName: 'busConsumer'
      },
      ...busConsumerLambdaProps,
      timeout: cdk.Duration.minutes(1),
      environment: {
        AWS_RETRY_MODE: 'standard',
        // AWS_MAX_ATTEMPTS: '3', // default is 3,
        EVENT_TYPE: eventTypeString
      },
      reservedConcurrentExecutions: 20
    });
    this.lambdaFunction = lambda.lambdaFunction;

    new ssm.StringParameter(this, 'LambdaFunctionName', {
      parameterName: generateParameterName(this, 'lambdaFunctionName'),
      stringValue: this.lambdaFunction.functionName
    });
  }

  public setTargetQueue(queue: Queue) {
    queue.grantSendMessages(this.lambdaFunction);
    this.lambdaFunction.addEnvironment('QUEUE_URL', queue.queueUrl);
  }

  public configureForDev() {
    const testQueue = new Queue(this, 'testTargetQueue', {
      retentionPeriod: cdk.Duration.minutes(5),
      encryption: cdk.aws_sqs.QueueEncryption.KMS_MANAGED
    });
    new ssm.StringParameter(this, 'testTargetQueueUrl', {
      parameterName: generateParameterName(this, 'testTargetQueueUrl'),
      stringValue: testQueue.queueUrl
    });
    testQueue.grantSendMessages(this.lambdaFunction);
  }

  public addKafkaSource(props: KafkaSourceConfigProps) {
    props.clientCertSecret.grantRead(this.lambdaFunction);
    props.serverCertSecret.grantRead(this.lambdaFunction);

    this.lambdaFunction.addEventSourceMapping(props.topicName, {
      batchSize: props.batchSize || 100,
      kafkaTopic: props.topicName,
      startingPosition: props.startingPosition || StartingPosition.LATEST,
      maxBatchingWindow: props.maxBatchingWindow || cdk.Duration.seconds(60),
      sourceAccessConfigurations: [
        {
          type: { type: 'CLIENT_CERTIFICATE_TLS_AUTH' },
          uri: props.clientCertSecret.secretArn
        },
        {
          type: { type: 'SERVER_ROOT_CA_CERTIFICATE' },
          uri: props.serverCertSecret.secretArn
        }
      ],
      kafkaBootstrapServers: props.bootstrapServers
    });
  }
}
