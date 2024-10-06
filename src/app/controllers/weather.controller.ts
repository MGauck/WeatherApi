import { Request, Response } from "express";
import { isValidLatitude, isValidLongitude } from "../validators/number.validator";
import { HTTP_CODES } from "../constants/httpsCodes.constants";
import { APP_ID, TEMPERATURE, WEATHER_API_URL } from "../constants/weather.constants";
import { getWeatherFeels } from "../utils/weather.utils";

export interface IWeather {
  condition: String;
  feels: TEMPERATURE;
  alerts?: String[];
};

export const getWeather = async (req: Request, res: Response) => {
  const { lat, long } = req.query;

  if (isValidLatitude(lat) && isValidLongitude(long)) {
    // at this point I know both lat and long are correct values, 
    // so marking it as any is to resolve ts issues
    const url = getUrl(lat as any, long as any);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    const weather: IWeather = {
      condition: json.current.weather[0]?.description || 'N/A',
      feels: getWeatherFeels(json.current.temp),
    };

    if(json.alerts) {
      weather.alerts = json.alerts.map( (alert: any) => alert.description);      
    }

    res.send(weather);
  } else {
    res.status(HTTP_CODES.BAD_REQUEST).send("Latitude or Longitude invalid!");
  }
}

export const getUrl = (lat: number, long: number): string => {
  return `${WEATHER_API_URL}?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily&appid=${APP_ID}`;  
}