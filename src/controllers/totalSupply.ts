import { Router, Request, Response, NextFunction } from "express";
import { getTotalSupply } from "../services/totalSupply";
import { formatResponse } from "../middlewares/format";


const router = Router()

const fetchData = async (req: Request, _: Response, next: NextFunction) => {
  try {
    const totalSupply = await getTotalSupply()
    req.value = totalSupply.toString()
    next();
  } catch(err) {
    next(err)
  }
}

router.get('/totalSupply', fetchData, formatResponse)

export default router