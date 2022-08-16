import { createDeckOfCards, shuffleDeck } from "../src/lib/deck";

const deck = createDeckOfCards();

describe("Generates a new deck of cards", () => {
  it("contains 52 cards", () => {
    expect(deck.length).toBe(52);
  });

  it("each card is unique", () => {
    const isUnique = (arrayToTest: any[]): boolean =>
      arrayToTest.length === new Set(arrayToTest).size;
    expect(isUnique(deck)).toBe(true);
  });
});

describe("Shuffle cards", () => {
  it("must be different from a new game", () => {
    const deckShuffled = shuffleDeck(deck);
    expect(deck).not.toBe(deckShuffled);
  });
});
