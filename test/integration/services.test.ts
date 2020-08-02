import { BigNumber } from "ethers";

import { getLockedTokens } from "../../src/features/lockedTokens/service";
import { getCirculatingSupply } from "../../src/features/circulatingSupply/service";
import { getTotalSupply } from "../../src/features/totalSupply/service";

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
