// Events
let epcArray: string[] = [];
export let eventRfid = {
  eventTime: '2021-03-09T11:42:03',
  // "recordTime" : "2021-03-09T11:42:03",
  eventTimeZoneOffset: '+02:00',
  eventType: 'OBJECT_EVENT',
  action: 'OBSERVE',
  readPointUri: '',
  epcs: epcArray
};

export let eventIPS101 = {
  event_type_cd: 101,
  event_gmt_dt: '2021-09-08 16:41:14.500',
  // "capture_gmt_dt": "2021-09-08 16:45:06.917",
  // "event_local_offset": 2,
  // "event_office_cd": 51,
  // "user_pid": -15322,
  // "workstation_pid": -1085,
  // "condition_cd": "",
  // "next_office_cd": "",
  recptcl_pid: '776AC393-C310-EC11-83D6-0A475B91DAF1'
  // "consgnt_pid": "None",
  // "contner_pid": "None",
  // "security_check_pid": "None",
  // "load_dt_utc": "2021-09-08 16:45:09.000",
  // "year_nr": 2021,
  // "month_nr": "09",
  // "day_nr": "08",
  // "hour_nr": 20
};

// Seems to not exist yet in example events (put item in bag). Preceding event: 1233. Next event: 101
export let event8 = {
  event_type_cd: 8
};

export let event105 = {
  event_type_cd: 105,
  event_gmt_dt: '2021-09-08 22:34:27.213',
  // "capture_gmt_dt": "2021-09-08 22:36:27.336",
  // "event_local_offset": 2,
  // "event_office_cd": 12,
  // "user_pid": "",
  // "workstation_pid": -16342,
  // "condition_cd": "",
  // "next_office_cd": "",
  recptcl_pid: '03967191-C510-EC11-83D6-0A475B91DAF1',
  consgnt_pid: 'DB8C72E4-E1A2-40B9-99F6-354147A843BD',
  contner_pid: '5FF1726D-26CF-4BDC-B9B2-713EACBAD1DE'
  // "security_check_pid": "None",
  // "load_dt_utc": "2021-09-08 22:36:30.000",
  // "year_nr": 2021,
  // "month_nr": "09",
  // "day_nr": "09",
  // "hour_nr": "02"
};

export let event301 = {
  event_type_cd: 301,
  event_gmt_dt: '2021-08-06 04:00:22.843',
  // "capture_gmt_dt": "2021-08-06 04:05:03.646",
  // "event_local_offset": 2,
  // "event_office_cd": 51,
  // "user_pid": 1655,
  // "workstation_pid": 15296,
  consgnt_pid: '7420CC77-D465-498F-86EF-48D67D48C81D'
  // "load_dt_utc": "2021-08-06 04:05:05.000",
  // "year_nr": 2021,
  // "month_nr": "08",
  // "day_nr": "06",
  // "hour_nr": "08"
};

// {
//   "mailitm_weight": 1.100,
//   "mailitm_value": "20.00",
//   "currency_cd": "Euro",
//   "evt_type_cd": 1233,
//   "evt_office_cd": 51,
//   "evt_gmt_dt": "2021-01-01 12:00:00.000",
//   "event_local_offset": 0,
//   "mailitm_fid": "LT000000001NL",
//   "mail_class_cd": "A",
//   "orig_country_cd": "NL",
//   "dest_country_cd": "SO",
//   "comments": "None",
// "_id" : "100"
// }
export let event1233 = {
  mailitm_weight: 1.1,
  mailitm_value: '20.00',
  currency_cd: 'Euro',
  // "duties_amount": "",
  // "state_ind_cd": 0,
  // "postal_status_cd": "",
  evt_type_cd: 1233,
  evt_office_cd: 51,
  evt_gmt_dt: '2021-09-07 03:21:00.000',
  // "postage_paid_value": "",
  // "additional_fees_value": "",
  // "mrs_expiration_date": "",
  mailitm_pid: 'DBC6CB43-F10F-EC11-83D6-0A475B91DAF1',
  mailitm_fid: 'LT000000001NL',
  mailitm_local_id: 'None',
  // "dutiable_ind": "None",
  // "customs_no": "None",
  mail_class_cd: 'A',
  mailitm_content_cd: 'None',
  // "operator_cd": "None",
  orig_country_cd: 'NL',
  dest_country_cd: 'SO'
  // "evt_innrbag_pid": "None",
  // "evt_recptcl_pid": "None",
  // "product_type_cd": "None",
  // "misc1": "None",
  // "misc2": "None",
  // "misc3": "None",
  // "comments": "None",
  // "postage_paid_currency_cd": "None",
  // "additional_fees_currency_cd": "None",
  // "customs_tax_pid": "None",
  // "misc4": "None",
  // "network_entry_location_type_cd": 3,
  // "mrs_status_cd": "None",
  // "mrs_original_id": "None",
  // "load_dt_utc": "2021-09-07 15:40:05.000",
  // "year_nr": 2021,
  // "month_nr": "09",
  // "day_nr": "07",
  // "hour_nr": 18
};

export let eventLTC = {
  // "errorcode": 200,
  // "errormessage": "None",
  // "result": true,
  // "responsemessage_feedbackdescription": "Nesting successful",
  // "responsemessage_statuscode": "001",
  request_containerid: '00087205080000826002',
  // "request_deviceid": "610b46f54714c028",
  request_eventtime: '2021-09-16T10:41:29.127Z',
  // "request_gridid": "I4",
  // "request_locationid": "nl-NL",
  // "request_processid": "",
  request_receptacleid: 'NLHAGAJPTYOAAEN10105064000015'
  // "request_sourceid": "MoaS-Export-Scan",
  // "request_userrole": "",
  // "year": 2021,
  // "month": "09",
  // "day": "08",
  // "hour": 18
};

// helpers
function getPid(segments = 5) {
  let returnArray = [];
  for (let i = 0; i < segments; i++) {
    returnArray.push(Math.random().toString(36).substring(2).toUpperCase());
  }
  return returnArray.join('-');
}
// Readpoints
export enum ReadPointUris {
  ImecDenHaag = 'urn:postnl:bv:rp:denhaag.imec.sc.gate.baan1',
  ImecLola = 'urn:postnl:bv:rp:denhaag.imec.sc.gate.lola',
  ImecDocks = 'urn:postnl:bv:rp:denhaag.imec.sc.docks01',
  SchipholDocks = 'urn:postnl:bv:rp:schiphol.cas.docks01'
}

// Containers
class Container {
  id: string;

  urn: string;

  pid: string;

  constructor() {
    let id = '';
    for (let i = 0; i < 17; i++) {
      id += Math.floor(Math.random() * 10).toString();
    }
    this.id = id;
    // company prefix is 7-10 digits long, length of company prefix + serial is 17.
    let companyPrefixLength = Math.floor(Math.random() * (10 - 7 + 1) + 7);
    this.urn = `urn:epc:id:sscc:${id.slice(0, companyPrefixLength) + '.' + id.slice(companyPrefixLength)}`;
    this.pid = getPid(5);
  }
}

const numContainers = 10;
export const containers = Array.from({ length: numContainers }, () => new Container());
// console.log(containers)

// Receptacles
class Receptacle {
  pid: string;

  requestReceptacleId: string;

  constructor() {
    this.pid = getPid(5);
    this.requestReceptacleId = this.pid; // Set id to pid for now. Original format: "NLHAGAJPTYOAAEN10105064000015"
  }
}

const numReceptacles = 10;
export const receptacles = Array.from({ length: numReceptacles }, () => new Receptacle());
// console.log(receptacles)

// MailItems
class MailItem {
  class: string;

  content: string;

  fid: string;

  localId: string;

  pid: string;

  value: string;

  weight: number;

  constructor() {
    this.class = 'E';
    this.content = 'None';
    this.localId = 'None';
    this.pid = getPid(5);
    this.fid = this.pid; // Temporarily set fid to pid. Original format: "EI002256131NL"
    this.value = '';
    this.weight = Math.random() * 10;
  }
}

const numMailItems = 100;
export const mailItems = Array.from({ length: numMailItems }, () => new MailItem());
// console.log(mailItems)
