const request = require("supertest");
import { describe, expect, test } from '@jest/globals';
import server from '../../app/server';

import { HTTP_CODES } from '../../app/constants/httpsCodes.constants';

describe('Weather controller', () => {

  afterAll(() => {
    server.close();
  });

  test(`getWeather returns ${HTTP_CODES.OK} for calls with valid latitude and longitude` , async () => {
    const response = await request(server).get('/weather?lat=39.74739044544878&long=-104.95209421807225');
    expect(response.statusCode).toBe(HTTP_CODES.OK);
    expect(response.body).toEqual({
      alerts: [
        "This functionallity is only available in paid subscription :/",
      ],
      condition: "few clouds",
      feels: "It is Hot",
    });
  });
  test(`getWeather returns ${HTTP_CODES.BAD_REQUEST} for calls with invalid latitude and longitude` , async() => {
    const response = await request(server).get('/weather?lat=-200&long=543');
    expect(response.statusCode).toBe(HTTP_CODES.BAD_REQUEST);    
  });
  test(`getWeather returns ${HTTP_CODES.BAD_REQUEST} for calls without latitude and longitude` , async () => {
    const response = await request(server).get('/weather');
    expect(response.statusCode).toBe(HTTP_CODES.BAD_REQUEST); 
  });
});