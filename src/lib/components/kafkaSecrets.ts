import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

export function importServerCertSecret(scope: Construct) {
  return secretsmanager.Secret.fromSecretNameV2(scope, 'kafkaServerCertSecret', 'KAFKA_EMAGIZ_CA_CERTIFICATE');
}

export function importClientCertSecret(scope: Construct) {
  return secretsmanager.Secret.fromSecretNameV2(scope, 'kafkaClientCertSecret', 'KAFKA_CORE_CONSUMER_CERTIFICATE');
}
