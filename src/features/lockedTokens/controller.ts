import { Router, Request, Response } from "express";
import { getLockedTokens } from "./service";

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const lockedTokens = await getLockedTokens()

  res.json({ value: lockedTokens.toString() })
})

export default router