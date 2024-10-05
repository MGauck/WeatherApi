import express from 'express';
import { getWeather } from '../controllers/weather.controller';

const weatherRouter = express.Router();

/**
 * @openapi
 * /weather:
 *   get:
 *     description: Gets weather data for given latitude and longitude
 *     parameters:
 *       - in: query
 *         name: latitude
 *         schema:
 *           type:  number
 *         description: value between -90 and 90
 *       - in: query
 *         name: longitude
 *         schema:
 *           type:  number
 *         description: value between -180 and 180
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               required:
 *                 - condition
 *                 - feels
 *               type: object
 *               properties:
 *                 condition:
 *                   type: string
 *                   example: "few clouds"
 *                 feels:
 *                   type: string
 *                   description: How the weather is perceive by humans
 *                   enum:
 *                     - It is Cold
 *                     - It is Moderate
 *                     - It is Hot
 *                 alerts:
 *                   type: array
 *                   items:
 *                     type: string
 *                     example: "Fire alert"               
 *       400:
 *         description: Latitude or Longitude invalid!
 */
weatherRouter.get("/", getWeather);

export default weatherRouter;