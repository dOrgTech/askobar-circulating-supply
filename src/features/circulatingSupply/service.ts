import { getTotalSupply } from "../totalSupply/service"
import { getLockedTokens } from "../lockedTokens/service"

export const getCirculatingSupply = async () => {
  const totalSupply = await getTotalSupply()
  const lockedTokens = await getLockedTokens()

  return totalSupply.sub(lockedTokens)
}