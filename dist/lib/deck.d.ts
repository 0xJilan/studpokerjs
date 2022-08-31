import { Deck } from "./utils";
/**
 * Build a 52 cards deck from suits and values
 * @returns {string []} Array of all possible cards
 * @exemple generateDeck() => [ '2-H','...','14-H','2-C','...','14-C,'2-D', '...','14-D','2-S'...','14-S']
 */
export declare const generateDeck: () => string[];
/**
 * Shuffle values contained in array
 * @param {string []} deck Array of string who represent each card of deck
 * @returns {string []} Array of 52 string shuffled
 * @exemple shuffleDeck(deck) => [ '5-H','7-S','5-D','10-D', ...]
 */
export declare const shuffleDeck: (deck: string[]) => string[];
/**
 * Split an array of string in two
 * @param {string []} shuffledDeck Array of shuffled string who represent each card of deck
 * @returns {string [][]} Two nested array of string who contains 5 cards each.
 * @exemple shuffleDeck(deck) => [ [ '5-S', '8-H', '8-S', '5-H', '6-S' ],[ '9-S', '3-D', '3-C', '14-D', '4-H' ] ]
 */
export declare const distributeDeck: (shuffledDeck: string[]) => string[][];
/**
 * Split an array by suits and values
 * @param {string []} deck Array of 5 cards
 * @returns {Deck} Object that contains two arrays of suits & values
 * @exemple splitBySuitsAndValues([3-D, 9-H, 3-S, 10-H, 4-C]) => {suits: ['D', 'H', 'S', 'H', 'C' ],values: [ 3, 9, 3, 10, 4 ]}
 */
export declare const splitBySuitsAndValues: (deck: string[]) => Deck;
export declare const excludeCardsFromDeck: (deckShuffled: string[], excludedCards: string[]) => string[];
export declare const getRandomCardsShuffledFromDeck: (numberOfCards: number, excludedCards?: string[]) => string[];
export declare const getReadableCards: (cards: string[]) => string[];
