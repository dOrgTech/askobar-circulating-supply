import { Router, Request, Response, NextFunction } from "express";
import { getCirculatingSupply } from "../services/circulatingSupply";

const router = Router()

const fetchData = async (req: Request, res: Response, next: NextFunction) => {
  const circulatingSupply = await getCirculatingSupply()
  // req.value = circulatingSupply.toString()
  // next();

  res.json({ value: circulatingSupply.toString() })
}

router.get('/circulatingSupply', fetchData)


export default router