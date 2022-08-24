"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitBySuitsAndValues = exports.distributeDeck = exports.shuffleDeck = exports.generateDeck = void 0;
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
//# sourceMappingURL=deck.js.map