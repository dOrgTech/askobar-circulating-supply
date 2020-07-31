import { Router, Request, Response } from "express";
import { getTotalSupply } from "./service";

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const totalSupply = await getTotalSupply()

  res.json({ value: totalSupply.toString() })
})

export default router