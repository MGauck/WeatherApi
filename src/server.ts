import express from 'express';
import { PORT } from './constants/server.constants';
import { getWeather } from './controllers/weather.controller';

const app = express();

app.use(express.json());

app.get("/weather", getWeather);

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);  
});