import { Router, Request, Response } from "express";
import { getLockedTokens } from "../services/lockedTokens";

const router = Router()

router.get('/lockedTokens', async (req: Request, res: Response) => {
  const lockedTokens = await getLockedTokens()

  res.json({ value: lockedTokens.toString() })
})

export default router