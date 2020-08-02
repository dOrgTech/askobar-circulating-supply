import { Request, Response, NextFunction } from "express";

export const setResponseFormat = (req: Request, res: Response, next: NextFunction) => {
  res.locals.format = req.params.format
  next()
}