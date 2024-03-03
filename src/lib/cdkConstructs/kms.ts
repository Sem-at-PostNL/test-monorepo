import { RemovalPolicy, StackProps } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';

interface KmsConstructProps extends StackProps {
  alias: string;
}
export class DefaultKmsConstruct extends Construct {
  public key: kms.IKey;

  private id: string;

  constructor(scope: Construct, id: string, props: KmsConstructProps) {
    super(scope, id);
    this.key = new kms.Key(this, id, {
      alias: props.alias,
      enableKeyRotation: true,
      removalPolicy: RemovalPolicy.DESTROY
    });
    this.id = id;
  }

  allowEventBridge() {
    this.key.addToResourcePolicy(
      new iam.PolicyStatement({
        sid: `event-bridge-allow-${this.id}`,
        effect: iam.Effect.ALLOW,
        resources: ['*'],
        principals: [new iam.ServicePrincipal('events.amazonaws.com')],
        actions: ['kms:Decrypt', 'kms:GenerateDataKey']
      })
    );
  }
}
