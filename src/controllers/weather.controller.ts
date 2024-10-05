import { Request, Response } from "express";
import { isValidLatitude, isValidLongitude } from "../validators/number.validator";
import { HTTP_CODES } from "../constants/httpsCodes.constants";
import { TEMPERATURE, WEATHER_API_URL } from "../constants/weather.constants";
import { getWeatherFeels } from "../utils/weather.utils";

const APP_ID = "";

export interface IWeather {
  condition: String;
  feels: TEMPERATURE;
  alerts?: String[];
};

export const getWeather = async (req: Request, res: Response) => {
  const { lat, long } = req.query;

  if (isValidLatitude(lat) && isValidLongitude(long)) {
    const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${long}&appid=${APP_ID}`);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    const weather: IWeather = {
      condition: json.weather[0]?.description || 'N/A',
      feels: getWeatherFeels(json.main.temp),
    };

    weather.alerts = [
      "This functionallity is only available in paid subscription :/"
    ];

    res.send(weather);
  }

  res.status(HTTP_CODES.BAD_REQUEST).send("Latitude or Longitude invalid!");
}