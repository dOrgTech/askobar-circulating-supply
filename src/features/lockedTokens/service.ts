import { getContract, getInfuraProvider } from '../../utils/web3';
import { BigNumber } from 'ethers';
import { lockingContractAddresses } from '../../utils/constants';

export const getLockedTokens = async () => {
  const provider = getInfuraProvider(1)
  const contract = getContract('AskoToken', provider)
  const addresses = Object.values(lockingContractAddresses)
  let accumulator = BigNumber.from(0)

  for(const address of addresses) {
    const contractLockedTokens: BigNumber = await contract.balanceOf(address)
    accumulator = accumulator.add(contractLockedTokens)
  }

  return accumulator
}