import {
  createDeckFromCards,
  shuffleDeck,
  distributeDeck,
  sortBySuitsAndValues,
} from "../src/lib/deck";

const deck = createDeckFromCards();
const deckShuffled = shuffleDeck(deck);
const setOfCards = distributeDeck(deckShuffled);

const isSuits = (currentValue: any): boolean =>
  currentValue === "H" ||
  currentValue === "D" ||
  currentValue === "C" ||
  currentValue === "S";

const isValues = (currentValue: any): boolean =>
  currentValue == 1 ||
  currentValue == 2 ||
  currentValue == 3 ||
  currentValue == 4 ||
  currentValue == 5 ||
  currentValue == 6 ||
  currentValue == 7 ||
  currentValue == 8 ||
  currentValue == 9 ||
  currentValue == 10 ||
  currentValue == 11 ||
  currentValue == 12 ||
  currentValue == 13;

const isSorted = (arrayOfValuesOrSuits: string[]) =>
  arrayOfValuesOrSuits
    .slice(1)
    .every((item, i) => arrayOfValuesOrSuits[i] <= item);

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
describe("Split deck by values and suits", () => {
  const splittedDeck = sortBySuitsAndValues(setOfCards[0]);
  const [bySuits, byValues] = splittedDeck;
  it("must return two arrays", () => {
    expect(splittedDeck.length).toBe(2);
  });
  it("first array must contain suits", () => {
    expect(bySuits.every(isSuits)).toBe(true);
  });
  it("second array must contain values", () => {
    expect(byValues.every(isValues)).toBe(true);
  });
  it("must be sorted by suits", () => {
    expect(isSorted(bySuits)).toBe(true);
  });
  it("must be sorted by values", () => {
    expect(isSorted(byValues)).toBe(true);
  });
});
