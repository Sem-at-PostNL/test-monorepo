import { Type as BusEventType } from '@core/interfaces/src/bus/types';
type Base64String = string;

export interface KafkaJsonRecord {
  topic: string;
  partition?: number;
  offset?: number;
  timestamp: number;
  timestampType: string;
  key?: string;
  value: Base64String;
  body?: string;
  headers?: {
    [key: string]: any[];
  };
}

interface KafkaJsonRecords {
  [topic_partition: string]: KafkaJsonRecord[];
}

export interface KafkaEvent {
  eventSource?: string;
  bootstrapServers?: string;
  records: KafkaJsonRecords;
}

export interface BusConsumerKafkaEvent extends KafkaEvent {
  busConsumerTargetQueue?: string;
}

export type TopicAddresses = {
  [topic in BusEventType]: string;
};
