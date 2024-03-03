import * as utils from '../src/utilities';

describe('utils test', () => {
  it('cloneObject', () => {
    const jsonObj = { foo: 'bar' };
    const clonedJsonObj = utils.cloneJson(jsonObj);
    expect(clonedJsonObj).toEqual(jsonObj);
    jsonObj.foo = 'bar2';
    expect(clonedJsonObj).not.toEqual(jsonObj);
  });

  it('parse stringified json', () => {
    const jsonObj = { foo: 'bar' };
    const stringifiedJsonObj = JSON.stringify({ foo: 'bar' });
    expect(utils.parseIfJson(stringifiedJsonObj)).toEqual(jsonObj);
  });

  it('parse unparseable', () => {
    const unparseable = 'unparseable';
    expect(utils.parseIfJson(unparseable)).toEqual(unparseable);
  });

  it('parse double stringified', () => {
    const stringified = JSON.stringify({ foo: 'bar' });
    const doubleStringified = JSON.stringify(stringified);
    expect(utils.parseIfJson(doubleStringified)).toEqual(doubleStringified);
  });

  it('json isJson', () => {
    const json = JSON.stringify({ foo: 'bar' });
    expect(utils.isJSON(json)).toEqual(true);
  });

  it('not json not isJson', () => {
    const notJson = JSON.stringify('notJson');
    expect(utils.isJSON(notJson)).toEqual(false);
  });

  it('not json not isJson 2', () => {
    const notJson = '{ foo: bar, })';
    expect(utils.isJSON(notJson)).toEqual(false);
  });

  it('catch expected error', async () => {
    const fn = jest.fn(async () => {
      throw new Error('Error');
    });
    expect(await utils.catchExpectedError(fn, {})).toEqual('Error');
  });

  it('catch expected error sync', () => {
    const fn = jest.fn(() => {
      throw new Error('Error');
    });
    expect(utils.catchExpectedErrorSync(fn, {})).toEqual('Error');
  });
});
