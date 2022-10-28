import { egeriaFetch } from './egeria-fetch';
import {describe, expect, it, jest} from '@jest/globals';
import { REQUEST_TIMEOUT } from '../commons/constants';

jest.setTimeout(REQUEST_TIMEOUT + 10000);

const abortFn = jest.fn();

// @ts-ignore
global.AbortController = jest.fn(() => ({
  abort: abortFn,
}));

describe('test', () => {
  it('should not trigger abortFn when under 300000ms', async () => {
    // @ts-ignore
    global.fetch = jest.fn(() => new Promise(resolve => resolve({ok:200})));

    await egeriaFetch('/', 'GET', {}, {}).then((response: any) => {
      expect(abortFn).toBeCalledTimes(0);
    });
  });

  it('should trigger abortFn when above 30000ms', async () => {
    // @ts-ignore
    global.fetch = jest.fn(() => new Promise(resolve => setTimeout(() => resolve({ok:200}), REQUEST_TIMEOUT + 1000)));

    const timeStart: any = Date.now();
    let timeEnd: any = null;

    await egeriaFetch('/', 'GET', {}, {}).then((response: any) => {
      timeEnd = Date.now();

      const diff = timeEnd - timeStart;

      expect(diff).toBeGreaterThan(REQUEST_TIMEOUT);

      expect(abortFn).toBeCalledTimes(1);
    });
  });
});