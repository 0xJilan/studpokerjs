import { substract } from "../src/lib/substract";

describe("Substract", () => {
  it("substract two values", () => {
    expect(substract(10, 45)).toBe(35);
  });

  it("can goes under 0", () => {
    const expected = "One for Alice, one for me.";
    expect(substract(10, 5)).toBe(-5);
  });
});
