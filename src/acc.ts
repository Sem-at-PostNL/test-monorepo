import { StageStack, EnvironmentStage } from './stage';
import { Construct } from 'constructs';
import { Core, CoreStackProps } from './lib/collections/core';
import { importClientCertSecret, importServerCertSecret } from './lib/components/kafkaSecrets';
import * as constants from './constants';

export class Acc extends StageStack {
  constructor(scope: Construct, props: CoreStackProps) {
    super(scope, 'acc', { ...props, env: constants.ACC_AWS_ENV });

    const core = new Core(this, {
      environment: EnvironmentStage.ACC,
      logLevel: 'DEBUG',
      singletonInfra: props.singletonInfra
    });

    core.configureKafkaEventSources({
      topicAddresses: {
        item: 'nl.postnl.pnlecus.accp.harmitem',
        event: 'nl.postnl.pnlecus.accp.hrmvnten'
      },
      clientCertSecret: importClientCertSecret(this),
      serverCertSecret: importServerCertSecret(this),
      bootstrapServers: [constants.BOOTSTRAPSERVER]
    });

    core.enableOpensearch(EnvironmentStage.ACC);
  }
}
