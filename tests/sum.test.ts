import { sum } from "../src/lib/sum";

describe("Sum", () => {
  it("add first to second number", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("can add two negatives values", () => {
    expect(sum(-10, -10)).toBe(-20);
  });
  it("can add one negative values to one positive", () => {
    expect(sum(10, -10)).toBe(0);
  });
});
