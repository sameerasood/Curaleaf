const CheckDigit = require("./checkDigit.js");

describe("class CheckDigit", () => {
  it("returns the string", () => {
    const checkDigit = new CheckDigit("JONES<P<<<11<11<2022");
    expect(checkDigit.machineReadableCode()).toEqual("JONES<P<<<11<11<2022");
  });
});
