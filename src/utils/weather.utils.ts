import { COLD_THRESHOLD, HOT_THRESHOLD, TEMPERATURE } from "../constants/weather.constants";

export const getWeatherFeels = (temp: number): TEMPERATURE => {
  return temp < COLD_THRESHOLD
    ? TEMPERATURE.IS_COLD
    : temp > HOT_THRESHOLD
      ? TEMPERATURE.IS_HOT
      : TEMPERATURE.IS_MODERATE;
}