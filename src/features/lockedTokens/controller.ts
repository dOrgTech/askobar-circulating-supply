import { Router } from "express";
import { getLockedTokens } from "./service";

const router = Router()

router.get('/', async (_, res, next) => {
  const lockedTokens = await getLockedTokens()
  res.locals.value = lockedTokens.toString()
  next()
})

export default router