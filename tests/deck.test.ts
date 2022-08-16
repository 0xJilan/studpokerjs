import { createDeckOfCards } from "../src/lib/deck";

describe("Generates a new deck of cards", () => {
  const deck = createDeckOfCards();
  it("contains 52 cards", () => {
    expect(deck.length).toBe(52);
  });

  it("each card is unique", () => {
    const isUnique = (arrToTest: any[]): boolean =>
      arrToTest.length === new Set(arrToTest).size;
    expect(isUnique(deck)).toBe(true);
  });
});
