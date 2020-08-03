import { getTotalSupply } from "./totalSupply"
import { getLockedTokens } from "./lockedTokens"

export const getCirculatingSupply = async () => {
  const totalSupply = await getTotalSupply()
  const lockedTokens = await getLockedTokens()

  return totalSupply.sub(lockedTokens)
}