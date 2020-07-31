import { Router, Request, Response } from "express";
import { getCirculatingSupply } from "./service";

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const circulatingSupply = await getCirculatingSupply()

  res.json({ value: circulatingSupply.toString() })
})

export default router