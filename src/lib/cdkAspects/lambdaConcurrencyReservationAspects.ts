import * as cdk from 'aws-cdk-lib';
import { IConstruct } from 'constructs';

export class LambdaConcurrencyReservationDefaultsTo10 implements cdk.IAspect {
  public visit(node: IConstruct): void {
    if (cdk.CfnResource.isCfnResource(node) && node.cfnResourceType === 'AWS::Lambda::Function') {
      const lambda = node as cdk.aws_lambda.CfnFunction;
      if (!lambda.reservedConcurrentExecutions) {
        node.addPropertyOverride('ReservedConcurrentExecutions', 10);
      }
    }
  }
}
