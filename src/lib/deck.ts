import { Deck } from "./utils";

const suits: string[] = ["H", "C", "D", "S"];
const values: number[] = [...Array(13)].map((_, index) => index + 2);
const readableSuits: any = { C: "♣", D: "♦", H: "♥", S: "♠" };

/**
 * Build a 52 cards deck from suits and values
 * @returns {string []} Array of all possible cards
 * @exemple generateDeck() => [ '2-H','...','14-H','2-C','...','14-C,'2-D', '...','14-D','2-S'...','14-S']
 */
export const generateDeck = (): string[] =>
  suits.flatMap((suit) => values.map((value) => value + "-" + suit));

/**
 * Shuffle values contained in array
 * @param {string []} deck Array of string who represent each card of deck
 * @returns {string []} Array of 52 string shuffled
 * @exemple shuffleDeck(deck) => [ '5-H','7-S','5-D','10-D', ...]
 */
export const shuffleDeck = (deck: string[]): string[] => {
  return [...deck].sort(() => 0.5 - Math.random());
};

/**
 * Split an array of string in two
 * @param {string []} shuffledDeck Array of shuffled string who represent each card of deck
 * @returns {string [][]} Two nested array of string who contains 5 cards each.
 * @exemple shuffleDeck(deck) => [ [ '5-S', '8-H', '8-S', '5-H', '6-S' ],[ '9-S', '3-D', '3-C', '14-D', '4-H' ] ]
 */
export const distributeDeck = (shuffledDeck: string[]): string[][] => [
  shuffledDeck.slice(0, 5),
  shuffledDeck.slice(5, 10),
];

/**
 * Split an array by suits and values
 * @param {string []} deck Array of 5 cards
 * @returns {Deck} Object that contains two arrays of suits & values
 * @exemple splitBySuitsAndValues([3-D, 9-H, 3-S, 10-H, 4-C]) => {suits: ['D', 'H', 'S', 'H', 'C' ],values: [ 3, 9, 3, 10, 4 ]}
 */
export const splitBySuitsAndValues = (deck: string[]): Deck => {
  return {
    suits: deck.map((card) => card.split("-")[1]),
    values: deck.map((card) => Number(card.split("-")[0])),
  };
};

//TODO: MAKE COMMENT AND TEST
export const excludeCardsFromDeck = (
  deckShuffled: string[],
  excludedCards: string[]
): string[] => {
  return deckShuffled.filter((card) => !excludedCards.includes(card));
};
//TODO: MAKE COMMENT AND TEST
export const getRandomCardsShuffledFromDeck = (
  numberOfCards: number,
  excludedCards: string[] = []
): string[] => {
  const deck = generateDeck();
  const shuffledDeck = shuffleDeck(deck);
  const randomDeck =
    excludedCards.length === 0
      ? shuffledDeck
      : excludeCardsFromDeck(shuffledDeck, excludedCards);
  return randomDeck.slice(0, numberOfCards);
};

//TODO: MAKE COMMENT AND TEST
export const getReadableCards = (cards: string[]): string[] => {
  return cards.map((card) => {
    const value = card.split("-")[0];
    const suit = card.split("-")[1];
    const readableValue =
      value === "11"
        ? "J"
        : value === "12"
        ? "Q"
        : value === "13"
        ? "K"
        : value === "14"
        ? "A"
        : value;
    return readableValue + readableSuits[suit];
  });
};
