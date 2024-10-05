import express from 'express';
import { getWeather } from '../controllers/weather.controller';

const weatherRouter = express.Router();

weatherRouter.get("/", getWeather);

export default weatherRouter;