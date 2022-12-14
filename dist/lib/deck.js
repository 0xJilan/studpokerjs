"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadableCards = exports.getRandomCardsShuffledFromDeck = exports.excludeCardsFromDeck = exports.splitBySuitsAndValues = exports.distributeDeck = exports.shuffleDeck = exports.generateDeck = void 0;
const suits = ["H", "C", "D", "S"];
const values = [...Array(13)].map((_, index) => index + 2);
/**
 * Build a 52 cards deck from suits and values
 * @returns {string []} Array of all possible cards
 * @exemple generateDeck() => [ '2-H','...','14-H','2-C','...','14-C,'2-D', '...','14-D','2-S'...','14-S']
 */
const generateDeck = () => suits.flatMap((suit) => values.map((value) => value + "-" + suit));
exports.generateDeck = generateDeck;
/**
 * Shuffle values contained in array
 * @param {string []} deck Array of string who represent each card of deck
 * @returns {string []} Array of 52 string shuffled
 * @exemple shuffleDeck(deck) => [ '5-H','7-S','5-D','10-D', ...]
 */
const shuffleDeck = (deck) => {
    return [...deck].sort(() => 0.5 - Math.random());
};
exports.shuffleDeck = shuffleDeck;
/**
 * Split an array of string in two
 * @param {string []} shuffledDeck Array of shuffled string who represent each card of deck
 * @returns {string [][]} Two nested array of string who contains 5 cards each.
 * @exemple shuffleDeck(deck) => [ [ '5-S', '8-H', '8-S', '5-H', '6-S' ],[ '9-S', '3-D', '3-C', '14-D', '4-H' ] ]
 */
const distributeDeck = (shuffledDeck) => [
    shuffledDeck.slice(0, 5),
    shuffledDeck.slice(5, 10),
];
exports.distributeDeck = distributeDeck;
/**
 * Split an array by suits and values
 * @param {string []} deck Array of 5 cards
 * @returns {Deck} Object that contains two arrays of suits & values
 * @exemple splitBySuitsAndValues([3-D, 9-H, 3-S, 10-H, 4-C]) => {suits: ['D', 'H', 'S', 'H', 'C' ],values: [ 3, 9, 3, 10, 4 ]}
 */
const splitBySuitsAndValues = (deck) => {
    return {
        suits: deck.map((card) => card.split("-")[1]),
        values: deck.map((card) => Number(card.split("-")[0])),
    };
};
exports.splitBySuitsAndValues = splitBySuitsAndValues;
//TODO: MAKE COMMENT AND TEST
const excludeCardsFromDeck = (deckShuffled, excludedCards) => {
    return deckShuffled.filter((card) => !excludedCards.includes(card));
};
exports.excludeCardsFromDeck = excludeCardsFromDeck;
//TODO: MAKE COMMENT AND TEST
const getRandomCardsShuffledFromDeck = (numberOfCards, excludedCards = []) => {
    const deck = (0, exports.generateDeck)();
    const shuffledDeck = (0, exports.shuffleDeck)(deck);
    const randomDeck = excludedCards.length === 0
        ? shuffledDeck
        : (0, exports.excludeCardsFromDeck)(shuffledDeck, excludedCards);
    return randomDeck.slice(0, numberOfCards);
};
exports.getRandomCardsShuffledFromDeck = getRandomCardsShuffledFromDeck;
//TODO: MAKE COMMENT AND TEST
const getReadableCards = (cards) => {
    return cards.map((card) => {
        const value = card.split("-")[0];
        const suit = card.split("-")[1];
        const readableValue = value === "10"
            ? "T"
            : value === "11"
                ? "J"
                : value === "12"
                    ? "Q"
                    : value === "13"
                        ? "K"
                        : value === "14"
                            ? "A"
                            : value;
        return readableValue + suit;
    });
};
exports.getReadableCards = getReadableCards;
//# sourceMappingURL=deck.js.map