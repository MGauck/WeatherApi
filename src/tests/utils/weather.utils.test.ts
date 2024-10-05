import { describe, expect, test } from '@jest/globals';
import { getWeatherFeels } from '../../app/utils/weather.utils';
import { TEMPERATURE } from '../../app/constants/weather.constants';

describe('Weather utils', () => {
  test(`getWeatherFeels returns ${TEMPERATURE.IS_COLD} for temperature lower than 283.15K`, () => {
    expect(getWeatherFeels(200.00)).toBe(TEMPERATURE.IS_COLD);
  });
  test(`getWeatherFeels returns ${TEMPERATURE.IS_MODERATE} for temperature between 283.15K and 293.15`, () => {
    expect(getWeatherFeels(283.15)).toBe(TEMPERATURE.IS_MODERATE);
    expect(getWeatherFeels(285.00)).toBe(TEMPERATURE.IS_MODERATE);
    expect(getWeatherFeels(293.15)).toBe(TEMPERATURE.IS_MODERATE);
  });
  test(`getWeatherFeels returns ${TEMPERATURE.IS_COLD} for temperature greater than 293.15`, () => {
    expect(getWeatherFeels(300.00)).toBe(TEMPERATURE.IS_HOT);
  });
});