import { Router, Request, Response, NextFunction } from "express";
import { getCirculatingSupply } from "../services/circulatingSupply";
import { formatResponse } from "../middlewares/format";

const router = Router()

const fetchData = async (req: Request, _: Response, next: NextFunction) => {
  const circulatingSupply = await getCirculatingSupply()
  req.value = circulatingSupply.toString()
  next();
}

router.get('/circulatingSupply', fetchData, formatResponse);


export default router