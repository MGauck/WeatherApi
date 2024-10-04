import { Request, Response } from "express";


export const getWeather = (_req: Request, res: Response) => {
  res.send('test');
}