import {
  generateDeck,
  shuffleDeck,
  distributeDeck,
  splitBySuitsAndValues,
} from "../src/lib/deck";
import { isSuits, isValues } from "../src/lib/mocks";

const deck = generateDeck();
const deckShuffled = shuffleDeck(deck);
const setOfCards = distributeDeck(deckShuffled);

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
  it("must return two arrays", () => {
    expect(distributedDecks.length === 2).toBe(true);
  });
  it("must return differents array", () => {
    const isSame = distributedDecks[0].every(
      (card, index) => card === distributedDecks[1][index]
    );
    expect(isSame).toBe(false);
  });
});
describe("Split deck by values and suits", () => {
  const splittedDeck = splitBySuitsAndValues(setOfCards[0]);
  const { suits, values } = splittedDeck;
  it("must return two arrays", () => {
    expect(Object.keys(splittedDeck).length).toBe(2);
  });
  it("first array must contain suits", () => {
    expect(suits.every(isSuits)).toBe(true);
  });
  it("second array must contain values", () => {
    expect(values.every(isValues)).toBe(true);
  });
});
