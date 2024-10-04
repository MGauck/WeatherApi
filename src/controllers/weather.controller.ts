import { Request, Response } from "express";
import { isValidLatitude, isValidLongitude } from "../validators/number.validator";
import { HTTP_CODES } from "../constants/httpsCodes.constants";
import { COLD_THRESHOLD, HOT_THRESHOLD, TEMPERATURE } from "../constants/weather.constants";


const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "";

export const getWeather = async (req: Request, res: Response) => {
  const { lat, long } = req.query;

  if (isValidLatitude(lat) && isValidLongitude(long)) {
    const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${long}&appid=${APP_ID}`);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    const weather = {
      condition: json.weather[0].description,
      feels: getWeatherFeels(json.main.temp),
    };

    res.send(weather);
  }

  res.status(HTTP_CODES.BAD_REQUEST).send("Latitude or Longitude invalid!");
}

function getWeatherFeels(temp: number): TEMPERATURE {
  return temp < COLD_THRESHOLD
    ? TEMPERATURE.IS_COLD
    : temp > HOT_THRESHOLD
      ? TEMPERATURE.IS_HOT
      : TEMPERATURE.IS_MODERATE;
}