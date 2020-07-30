import { SupportedNames } from "./types"
import { Contract, Signer } from "ethers"
import { contractAddresses } from "./addresses"
import { InfuraProvider, Provider } from '@ethersproject/providers'

const ABI_BASE_ROUTE = '../../abis'

export const getABI = (name: SupportedNames) => {
  try {
    return require(`${ABI_BASE_ROUTE}/${name}.json`)
  } catch (error) {
    throw new Error(`No ABI found with name: ${name}`)
  }
}

export const getContract = (name: SupportedNames, provider: Signer | Provider) => {
  const abi = getABI(name)
  const address = contractAddresses[name]

  return new Contract(address, abi, provider)
}

export const getNetworkName = (id: number) => {
  switch (id) {
    case 1:
      return "mainnet";
    case 3:
      return "ropsten";
    case 4:
      return "rinkeby";
    case 5:
      return "goerli";
    case 42:
      return "kovan";
    default:
      return "mainnet";
  }
};

export const getInfuraProvider = (network: number) => {
  return new InfuraProvider(network, {
    projectId: process.env.INFURA_PROJECT_ID,
    projectSecret: process.env.INFURA_PROJECT_SECRET
  });
}