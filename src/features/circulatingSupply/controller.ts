import { Router } from "express";
import { getCirculatingSupply } from "./service";

const router = Router()

router.get('/', async (_, res, next) => {
  const circulatingSupply = await getCirculatingSupply()
  res.locals.value = circulatingSupply.toString()
  next()
})

export default router