import { Request, Response, NextFunction } from "express";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { tokenDecimals } from "../utils/constants";

export const formatDecimals = (req: Request, _: Response, next: NextFunction) => {

  const showDecimals = req.query.decimals && JSON.parse(req.query.decimals.toString())
  
  if(showDecimals && req.value) {
    const value = BigNumber.from(req.value)
    req.value = formatUnits(value, tokenDecimals).toString()
  }

  next()
}