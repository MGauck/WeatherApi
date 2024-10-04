import { Request, Response } from "express";
import { isValidLatitude, isValidLongitude } from "../validators/number.validator";
import { HTTP_CODES } from "../constants/httpsCodes.constants";


const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "";

export const getWeather = async (req: Request, res: Response) => {
  const { lat, long } = req.query;

  if( isValidLatitude(lat) && isValidLongitude(long)){
    const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${long}&appid=${APP_ID}`);

    if( !response.ok ) {
      throw new Error(`Response status: ${response.status}`);
    }

    const weather = await response.json();

    res.send(weather);
  } 

  res.status(HTTP_CODES.BAD_REQUEST).send("Latitude or Longitude invalid!");
}