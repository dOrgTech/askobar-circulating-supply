import { Router, Request, Response } from "express";
import { getTotalSupply } from "../services/totalSupply";

const router = Router()

router.get('/totalSupply', async (req: Request, res: Response) => {
  const totalSupply = await getTotalSupply()

  res.json({ value: totalSupply.toString() })
})

export default router