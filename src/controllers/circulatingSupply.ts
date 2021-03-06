import { Router, Request, Response, NextFunction } from "express";
import { getCirculatingSupply } from "../services/circulatingSupply";
import { formatResponse } from "../middlewares/format";
import { formatDecimals } from "../middlewares/decimals";

const router = Router()

const fetchData = async (req: Request, _: Response, next: NextFunction) => {
  try {
    const circulatingSupply = await getCirculatingSupply()
    req.value = circulatingSupply.toString()
    next();
  } catch (err) {
    next(err)
  }
}

router.get('/circulatingSupply', fetchData, formatDecimals, formatResponse);


export default router