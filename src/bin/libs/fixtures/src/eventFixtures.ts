/**
 * eMagiz desired events (not yet available)
 */

export const eMagizDesiredRfidScanEvent = (eventTime: string = new Date().toISOString()) => ({
  events: [
    {
      // create the date (like below) in the correct timezone (+1)
      eventTime: new Date(new Date(eventTime).getTime() + 3600000).toISOString().substring(0, 23),
      recordTime: '2021-11-08T11:17:17',
      eventType: 'OBJECT_EVENT',
      action: 'OBSERVE',
      readPointUri: 'urn:postnl:bv:rp:schiphol.cas.airsidedock',
      eventTimeZoneOffset: '+01:00',
      sentUserId: 'SYSTEM',
      eventReason: 'NA',
      epcs: ['urn:epc:id:sscc:8720508.0000086030'],
      bizTransList: {},
      quantities: {},
      extensions: {},
      readPointExtensions: {},
      bizLocationExtensions: {},
      _id: '08d70c05-9d27-4486-b922-3ab272f8028d'
    }
  ]
});

export interface IEMagizLTCEvent {
  Result: boolean;
  ErrorCode: string;
  ErrorMessage: string;
  ResponseMessage: {
    StatusCode: string;
    FeedbackDescription: string;
  };
  Request: {
    ReceptacleId?: string;
    GridId: string;
    ContainerId: string;
    FirstScanAfterPrint: boolean;
    DeviceId: string;
    Surface: boolean;
    EventTime: string;
  };
}

export const eMagizLTCEvent = (receptacleId: string = 'NLHAGAGRATHABUN20031003100001', EventTime: string = new Date().toISOString()): IEMagizLTCEvent => {
  return {
    Result: true,
    ErrorCode: '200',
    ErrorMessage: 'None',
    ResponseMessage: {
      StatusCode: '001',
      FeedbackDescription: 'Nesting successful'
    },
    Request: {
      ReceptacleId: receptacleId,
      GridId: 'I9',
      ContainerId: '00087205080001374359',
      FirstScanAfterPrint: false,
      DeviceId: 'MDMR102001825',
      Surface: false,
      EventTime
    }
  };
};
