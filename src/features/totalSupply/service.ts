import { getContract, getInfuraProvider } from '../../utils/web3';
import { BigNumber } from 'ethers';

export const getTotalSupply = async () => {
  const provider = getInfuraProvider(1)
  const contract = getContract('AskoToken', provider)

  const totalSupply: BigNumber = await contract.totalSupply()

  return totalSupply
}