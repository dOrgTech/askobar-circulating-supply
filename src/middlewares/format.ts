import { Request, Response } from "express";

export const formatResponse = (req: Request, res: Response) => {
  
  if(req.query.format && req.query.format === 'text') {
    res.set('Content-Type', 'text/plain')
    res.send(req.value)
  }

  res.json({ value: req.value })
}