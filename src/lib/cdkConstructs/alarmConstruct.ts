import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

type AlarmTopic = 'low' | 'medium' | 'high' | 'critical' | sns.ITopic;
interface AlarmConstructProps {
  alarmProps: cloudwatch.CreateAlarmOptions;
  metric: cloudwatch.MetricProps | cloudwatch.Metric;
  alarmTopic: AlarmTopic;
  okAction: boolean;
}

interface AlarmTopics {
  low: cdk.aws_sns.ITopic;
  medium: cdk.aws_sns.ITopic;
  high: cdk.aws_sns.ITopic;
  critical: cdk.aws_sns.ITopic;
}

export class AlarmConstruct extends Construct {
  public readonly alarmTopics: AlarmTopics;

  constructor(scope: Construct, id: string, props: AlarmConstructProps) {
    super(scope, id);
    const getAlarmTopic = (level: string) =>
      sns.Topic.fromTopicArn(this, `${level}-alarm-topic`, `arn:aws:sns:${cdk.Stack.of(this).region}:${cdk.Stack.of(this).account}:lpe-monitoring-base-${level}-alert`);
    this.alarmTopics = {
      low: getAlarmTopic('low'),
      medium: getAlarmTopic('medium'),
      high: getAlarmTopic('high'),
      critical: getAlarmTopic('critical')
    };
    const setTopic = (topic: AlarmTopic) => (typeof topic === 'string' ? this.alarmTopics[topic] : topic);
    const alarm = new cloudwatch.Alarm(this, id, {
      metric: props.metric instanceof cloudwatch.Metric ? props.metric : new cloudwatch.Metric(props.metric),
      ...props.alarmProps
    });

    alarm.addAlarmAction(new SnsAction(setTopic(props.alarmTopic)));
    if (props.okAction) alarm.addOkAction(new SnsAction(setTopic(props.alarmTopic)));
  }
}

interface DefaultDLQAlarmConstructProps {
  deadLetterQueue: sqs.Queue;
}

export class DefaultDLQAlarmConstruct extends AlarmConstruct {
  constructor(scope: Construct, id: string, props: DefaultDLQAlarmConstructProps) {
    super(scope, id, {
      metric: props.deadLetterQueue.metric('ApproximateNumberOfMessagesVisible'),
      alarmProps: {
        threshold: 100,
        evaluationPeriods: 3
      },
      alarmTopic: 'high',
      okAction: false
    });
  }
}
