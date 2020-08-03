import { BigNumber } from "ethers";

import { getLockedTokens } from "../../src/services/lockedTokens";
import { getCirculatingSupply } from "../../src/services/circulatingSupply";
import { getTotalSupply } from "../../src/services/totalSupply";

describe("Services ", () => {
  it("Get locked tokens ", async () => {
    const total: BigNumber = await getLockedTokens();
    expect(total).toBeInstanceOf(BigNumber);
  });
  
  it("Get circulating supply ", async () => {
    const total: BigNumber = await getCirculatingSupply();
    expect(total).toBeInstanceOf(BigNumber);
  });
  
  it("Returns locked tokens", async () => {
    const total: BigNumber = await getTotalSupply();
    expect(total).toBeInstanceOf(BigNumber);
  })
});
