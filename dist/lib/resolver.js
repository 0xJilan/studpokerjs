"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveGame = exports.resolveHand = exports.getPoints = void 0;
const checker_1 = require("./checker");
const utils_1 = require("./utils");
const deck_1 = require("./deck");
/**
 * Check if a given array only contains number
 * @param {any []} arrayToCheck Array of values
 * @returns {boolean} true if only number|| false
 * @exemple isOnlyNumbers([4,7,9,13,14]) => true
 */
const isOnlyNumbers = (arrayToCheck) => arrayToCheck.every((value) => typeof value === "number");
/**
 * Sort an array of string or number
 * @param {any []} arrayToSort Array of values
 * @returns {any []} Array sorted
 * @exemple sortByType([4,13,7,2,14]) => [2,4,7,13,14]
 */
const sortByType = (arrayToSort) => isOnlyNumbers(arrayToSort)
    ? arrayToSort.sort((a, b) => a - b)
    : arrayToSort.sort();
/**
 * Get the score of a given name depending of combinaition name and sum of values contained
 * @param {string} rank Combination name
 * @param {number []} values Array of values
 * @returns {number} Total value added
 * @exemple getPoints('FLUSH', [ 2, 4, 5, 9, 11]) => 31
 */
const getPoints = (rank, values) => {
    const duplicates = (0, checker_1.getDuplicates)(values);
    return rank === "ONE_PAIR" ||
        rank === "THREE_OF_KIND" ||
        rank === "FOUR_OF_KIND"
        ? (0, checker_1.sum)(duplicates)
        : rank === "TWO_PAIRS"
            ? (0, checker_1.sum)(duplicates.slice(2))
            : rank === "FULL"
                ? duplicates[2] * 3
                : rank === "ACE_AND_KING" || rank === "NOTHING"
                    ? 0
                    : (0, checker_1.sum)(values);
};
exports.getPoints = getPoints;
/**
 * Resolves hand by determining the value of its score, the name of the combination it contains
 * @param {Deck} hand Object that contains two arrays of suits and values
 * @returns {Resolution} Object that contain score, name of combination
 * @exemple resolveHand({suits:['C','D','D','H','S'], values:[2,2,8,11,11]}) => {score: 322, handRank: 'TWO_PAIRS'}
 */
const resolveHand = (deck) => {
    const hand = (0, deck_1.splitBySuitsAndValues)(deck);
    const { suits, values } = hand;
    const sortedSuits = sortByType(suits);
    const sortedValues = sortByType(values);
    const ranking = (0, checker_1.getHandName)(sortedSuits, sortedValues);
    return {
        score: utils_1.HandRankings[ranking] + (0, exports.getPoints)(ranking, sortedValues),
        handRank: ranking,
    };
};
exports.resolveHand = resolveHand;
/**
 * Resolves game by comparing score and check if bank is qualified
 * @param {HandResolution} bankResolvedHand Object that contains the bank resolved hand
 * @param {HandResolution} playerResolvedHand Object that contains the player resolved hand
 * @returns {GameResolution} Object that contain the resolution of game, with qualification of bank, winner and payout
 * @exemple resolveGame({score: 322, handRank: 'TWO_PAIRS'}, {score: 204, handRank: 'ONE_PAIRS'}) => {isBankQualified: true, winner : 'Bank', payout: 0}
 */
const resolveGame = (bankResolvedHand, playerResolvedHand) => {
    const winner = (0, checker_1.getWinner)(bankResolvedHand.score, playerResolvedHand.score);
    const playerRanking = playerResolvedHand.handRank;
    return {
        isBankQualified: (0, checker_1.isQualified)(bankResolvedHand),
        winner,
        payout: (0, checker_1.isQualified)(bankResolvedHand) && winner === "Player"
            ? utils_1.HandPayouts[playerRanking]
            : 0,
    };
};
exports.resolveGame = resolveGame;
//# sourceMappingURL=resolver.js.map