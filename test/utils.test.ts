import { Contract } from "ethers";
import { JsonRpcProvider, Provider } from "@ethersproject/providers";
import {
  getABI,
  getContract,
  getNetworkName,
  getInfuraProvider,
} from "../src/utils/web3";

const ethereumObject = require("ganache-cli").provider();

const networksId = [1, 3, 4, 5, 42];
const randomId = Math.floor(Math.random() * networksId.length);
const randomNetwork = networksId[randomId];

describe("Utils ", () => {
  it("Get contract interface ", () => {
    const contractInterface = getABI("AskoToken");
    expect(contractInterface).toBeDefined();
    expect(contractInterface.contractName).toMatch("AskoToken");
    expect(contractInterface.abi).toBeInstanceOf(Array);
  });

  it("Get contract instance ", () => {
    const con = new JsonRpcProvider(ethereumObject);
    const contractInstance = getContract("AskoToken", con.getSigner());
    expect(contractInstance).toBeInstanceOf(Contract);
  });

  it("Get network name ", () => {
    const networksName = expect.stringMatching(
      /mainnet|ropsten|rinkeby|goerli|kovan/
    );
    const network = getNetworkName(randomNetwork);
    expect(network).toEqual(networksName);
  });

  it("Get infura provider ", () => {
    const provider = getInfuraProvider(randomNetwork);
    expect(provider).toBeDefined();
    expect(provider).toBeInstanceOf(Provider);
  });
});
