import * as environment from './stage';
import { Construct } from 'constructs';
import { Core, CoreStackProps } from './lib/collections/core';
import { importClientCertSecret, importServerCertSecret } from './lib/components/kafkaSecrets';
import * as constants from './constants';

export class Prd extends environment.StageStack {
  constructor(scope: Construct, props: CoreStackProps) {
    super(scope, 'prd', { ...props, env: constants.PROD_AWS_ENV });

    if (!environment.isDeployedFromPipeline()) {
      throw new Error('This stack can only be deployed from CI');
    }

    const core = new Core(this, {
      environment: environment.EnvironmentStage.PROD,
      logLevel: 'WARN',
      singletonInfra: props.singletonInfra
    });

    core.configureKafkaEventSources({
      topicAddresses: {
        item: 'nl.postnl.pnlecus.prod.harmitem',
        event: 'nl.postnl.pnlecus.prod.hrmvnten'
      },
      clientCertSecret: importClientCertSecret(this),
      serverCertSecret: importServerCertSecret(this),
      bootstrapServers: [constants.BOOTSTRAPSERVER]
    });

    core.enableOpensearch(environment.EnvironmentStage.PROD);
  }
}
