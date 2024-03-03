import { JSONPathOptions } from 'jsonpath-plus';

export interface ParsedRecordBody {
  detail: EngineEvent;
}

export enum RuleStates {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled'
}

export interface ConditionField {
  fieldPath: string;
  equals: string | RegExp;
}
export interface EventMappingField {
  /**
   * fieldName will contain the key value for the target object
   */
  fieldName: string;
  /**
   * if multiPath boolean is false, this will contain a single jsonpath. If multiPath boolean is true, this will contain an array of paths.
   */
  path: JSONPathOptions['path'] | Array<JSONPathOptions['path']>;
  /**
   * if you will define an array of path strings, this needs to be true.
   */
  multiPath?: boolean;
  /**
   * add a string to join the result of a given array of resolved paths (defaults to '')
   */
  multiPathJoiner?: string;
  prefix?: string;
  /**
   * if value is defined, the path and prefix will be ignored, but path still has to be filled (typescript must)
   */
  value?: any;
  transformation?: any;
}
export interface EngineEvent {
  action?: string;
  location?: string;
  actionType?: string;
}

export interface KafkaJsonRecord {
  topic: string;
  partition?: string;
  offset?: string;
  timestamp: number;
  timestampType: string;
  key?: string;
  value: string;
  body?: string;
  eventSourceARN?: string;
}

interface KafkaJsonRecords {
  [k: string]: KafkaJsonRecord[];
}

export interface KafkaEvent {
  eventSource?: string;
  bootstrapServers?: string;
  records: KafkaJsonRecords;
}

export enum DeltaAction {
  INSERT = 'Insert',
  UPDATE = 'Update',
  DELETE = 'Delete'
}

export enum KnownEventName {
  LOCATION = 'CBS locations'
}
export interface LocationDeltaEvent {
  Timestamp: string;
  Version: number;
  SchemaVersion: number;
  Action: DeltaAction;
  Name: string;
  Row: Row;
}

export interface Row {
  Id: string;
  Timestamp: string;
  Fields: Record<string, any>;
}

export interface EnrichedEvent {
  rawEvent: Record<string, any>;
  type?: string;
  source?: string;
  richEvent: Record<string, any>;
  fromDatastore: Record<string, any>;
}

export enum NodeTypePrefixes {
  none = 'NONE',
  rollcage = 'ROLLCAGE',
  container = 'CONTAINER',
  item = 'ITEM',
  consignment = 'CONSIGNMENT',
  receptacle = 'RECEPTACLE',
  epc = 'EPC'
}

export interface KafkaCertificate {
  certificate: string;
  privateKey: string;
}

export interface TopicMessage {
  topic: string;
  messages: KafkaMessage[];
}

export interface KafkaMessage {
  key: string;
  value: string;
  headers?: { [k: string]: string };
}

export interface SendToKafkaOutputMessageBody {
  Message: {
    Sender: string;
    DateTime: string;
    Version: string;
  };
  Exception: {
    DateTime: string;
    Code: string;
    InvolvedStakeholder?: string;
    Description: string;
    Level: string;
    InvolvedProcess?: string;
    Type: string;
    Event?: { [key: string]: any };
    IdentificationNumber: string;
    AggregationLevelType: string;
    Rule: {
      Id: string;
      Name: string;
      LastModified: string;
    };
    InvolvedLocation?: string;
  };
}

export enum CheckFrequency {
  Every15Minutes = 'every15Minutes',
  EveryHour = 'everyHour'
}
