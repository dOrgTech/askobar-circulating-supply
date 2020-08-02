import { Request, Response } from "express";

export const formatResponse = (_: Request, res: Response) => {
  const format = res.locals.format?.toLowerCase()
  
  if(format === 'json') {
    res.json({ value: res.locals.value })
  } else {
    res.type('text/plain');
    res.send(res.locals.value)
  }
}