import { Router, Request, Response, NextFunction } from "express";
import { getLockedTokens } from "../services/lockedTokens";
import { formatResponse } from "../middlewares/format";
import { formatDecimals } from "../middlewares/decimals";

const router = Router()

const fetchData = async (req: Request, _: Response, next: NextFunction) => {
  try {
    const lockedTokens = await getLockedTokens()
    req.value = lockedTokens.toString()
    next();
  } catch (err) {
    next(err)
  }
}

router.get('/lockedTokens', fetchData, formatDecimals, formatResponse)

export default router