import {
  createDeckFromCards,
  shuffleDeck,
  distributeDeck,
} from "../src/lib/deck";

const deck = createDeckFromCards();
const deckShuffled = shuffleDeck(deck);
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
    expect(deck).not.toBe(deckShuffled);
  });
});

describe("Distribute cards", () => {
  const distributedDecks = distributeDeck(deckShuffled);

  it("must return at least two arrays", () => {
    expect(distributedDecks.length >= 2).toBe(true);
  });
  it("must return differents array", () => {
    const isSame = distributedDecks[0].every(
      (card, index) => card === distributedDecks[1][index]
    );
    expect(isSame).toBe(false);
  });
  it("must return 3 decks for 3 players", () => {
    const setOfThree = distributeDeck(deckShuffled, 3);
    expect(setOfThree.length).toBe(3);
  });
  it("must return 5 decks for 5 players", () => {
    const setOfFive = distributeDeck(deckShuffled, 5);
    expect(setOfFive.length).toBe(5);
  });
});
