import { Router } from "express";
import { getTotalSupply } from "./service";

const router = Router()

router.get('/', async (req, res, next) => {
  const totalSupply = await getTotalSupply()
  res.locals.value = totalSupply.toString()
  next()
})

export default router