import { Router, Request, Response, NextFunction } from "express";
import { getLockedTokens } from "../services/lockedTokens";
import { formatResponse } from "../middlewares/format";

const router = Router()

const fetchData = async (req: Request, _: Response, next: NextFunction) => {
  const lockedTokens = await getLockedTokens()
  req.value = lockedTokens.toString()
  next();
}

router.get('/lockedTokens', fetchData, formatResponse)

export default router