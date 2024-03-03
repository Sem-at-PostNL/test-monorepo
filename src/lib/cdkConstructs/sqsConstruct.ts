import * as cdk from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { DefaultDLQAlarmConstruct } from './alarmConstruct';

interface DefaultSqsProps {
  mainQueueProps: sqs.QueueProps;
  deadLetterQueue: boolean;
  dlqProps?: sqs.QueueProps;
  maxReceiveCount?: number;
}

export interface AlarmTopics {
  low: cdk.aws_sns.ITopic;
  medium: cdk.aws_sns.ITopic;
  high: cdk.aws_sns.ITopic;
  critical: cdk.aws_sns.ITopic;
}

export class DefaultSQS extends Construct {
  public readonly queue: sqs.Queue;

  public readonly deadLetterQueue?: sqs.Queue;

  public readonly alarmTopics?: AlarmTopics;

  constructor(scope: Construct, id: string, props: DefaultSqsProps) {
    super(scope, id);
    const queueDetails: sqs.QueueProps = {
      encryption: sqs.QueueEncryption.KMS_MANAGED,
      visibilityTimeout: cdk.Duration.minutes(3),
      ...props.mainQueueProps
    };

    if (props.deadLetterQueue) {
      this.deadLetterQueue = new sqs.Queue(this, `DLQ${id}`, {
        encryption: queueDetails.encryption,
        retentionPeriod: cdk.Duration.days(14),
        ...props.dlqProps
      });
      const { alarmTopics } = new DefaultDLQAlarmConstruct(this, 'ApproximateNumberOfMessagesVisibleDLQ', {
        deadLetterQueue: this.deadLetterQueue
      });
      this.alarmTopics = alarmTopics;
    }

    this.queue = new sqs.Queue(this, id, {
      ...queueDetails,
      ...(this.deadLetterQueue && {
        deadLetterQueue: {
          maxReceiveCount: props.maxReceiveCount || 5,
          queue: this.deadLetterQueue
        }
      })
    });
  }
}
