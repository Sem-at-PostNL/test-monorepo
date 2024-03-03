import { Construct } from 'constructs';
import { BusTopicConsumer } from '../components/busConsumer';
import * as stage from '../../stage';
import * as cdk from 'aws-cdk-lib';
import { Type as BusEventType } from '@core/interfaces/src/bus/types';
import { TopicAddresses } from '@core/interfaces/src/bus/kafka';
import { SingletonCoreInfra } from './singletonCoreInfra';

const ID = 'CORE';

export interface CoreStackProps extends cdk.StackProps {
  singletonInfra: SingletonCoreInfra;
}

interface KafkaConfig {
  topicAddresses: TopicAddresses;
  clientCertSecret: secretsmanager.ISecret;
  serverCertSecret: secretsmanager.ISecret;
  bootstrapServers: string[];
}

interface CoreProps {
  environment: stage.EnvironmentStage;
  logLevel: string;
  singletonInfra: SingletonCoreInfra;
}

export class Core extends Construct {
  private readonly xrayEnabled: boolean = true;

  private busEventConsumer: BusTopicConsumer;

  private busItemConsumer: BusTopicConsumer;

  constructor(scope: Construct, props: CoreProps) {
    super(scope, ID);

    this.busItemConsumer = new BusTopicConsumer(this, BusEventType.ITEM, {
      stage: props.environment,
      logLevel: props.logLevel,
      xrayEnabled: this.xrayEnabled
    });

    this.busEventConsumer = new BusTopicConsumer(this, BusEventType.EVENT, {
      stage: props.environment,
      logLevel: props.logLevel,
      xrayEnabled: this.xrayEnabled
    });
  }

  public configureForDev() {
    this.busItemConsumer.configureForDev();
    this.busEventConsumer.configureForDev();
  }

  public configureKafkaEventSources(kafkaConfig: KafkaConfig) {
    this.busEventConsumer.addKafkaSource({
      topicName: kafkaConfig.topicAddresses.event,
      batchSize: 100,
      startingPosition: StartingPosition.LATEST,
      maxBatchingWindow: cdk.Duration.seconds(60),
      ...kafkaConfig
    });

    this.busItemConsumer.addKafkaSource({
      topicName: kafkaConfig.topicAddresses.item,
      batchSize: 100,
      startingPosition: StartingPosition.LATEST,
      maxBatchingWindow: cdk.Duration.seconds(60),
      ...kafkaConfig
    });
  }
}
