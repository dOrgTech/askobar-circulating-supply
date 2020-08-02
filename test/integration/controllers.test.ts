import request from "supertest";
import app from "../../src/app";

describe("API ", () => {
  it("Call total supply endpoint ", async () => {
    const response: request.Response = await request(app).get("/totalSupply");
    const { value } = response.body;
    expect(value).toBeDefined();
    expect(value).toMatch(/(?:0|1|2|3|4|5|6|7|8|9)/);
  });
  
  it("Call circulating supply endpoint ", async () => {
    const response: request.Response = await request(app).get("/circulatingSupply");
    const { value } = response.body;
    expect(value).toBeDefined();
    expect(value).toMatch(/(?:0|1|2|3|4|5|6|7|8|9)/);
  });

  it("Call locked tokens endpoint ", async () => {
    const response: request.Response = await request(app).get("/lockedTokens");
    const { value } = response.body;
    expect(value).toBeDefined();
    expect(value).toMatch(/(?:0|1|2|3|4|5|6|7|8|9)/);
  })
});
