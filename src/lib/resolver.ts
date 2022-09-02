import {
  getDuplicates,
  sum,
  getHandName,
  isQualified,
  getWinner,
} from "./checker";
import {
  HandRankings,
  HandPayouts,
  HandResolution,
  GameResolution,
} from "./utils";
import { splitBySuitsAndValues } from "./deck";

/**
 * Check if a given array only contains number
 * @param {any []} arrayToCheck Array of values
 * @returns {boolean} true if only number|| false
 * @exemple isOnlyNumbers([4,7,9,13,14]) => true
 */
const isOnlyNumbers = (arrayToCheck: any[]): boolean =>
  arrayToCheck.every((value) => typeof value === "number");

/**
 * Sort an array of string or number
 * @param {any []} arrayToSort Array of values
 * @returns {any []} Array sorted
 * @exemple sortByType([4,13,7,2,14]) => [2,4,7,13,14]
 */
const sortByType = (arrayToSort: any[]): any[] =>
  isOnlyNumbers(arrayToSort)
    ? arrayToSort.sort((a, b) => a - b)
    : arrayToSort.sort();

/**
 * Get the score of a given name depending of combinaition name and sum of values contained
 * @param {string} rank Combination name
 * @param {number []} values Array of values
 * @returns {number} Total value added
 * @exemple getPoints('FLUSH', [ 2, 4, 5, 9, 11]) => 31
 */
export const getPoints = (rank: string, values: number[]): number => {
  const duplicates = getDuplicates(values);
  return rank === "ONE_PAIR" ||
    rank === "THREE_OF_KIND" ||
    rank === "FOUR_OF_KIND"
    ? sum(duplicates)
    : rank === "TWO_PAIRS"
    ? sum(duplicates.slice(2))
    : rank === "FULL"
    ? duplicates[2] * 3
    : rank === "ACE_AND_KING" || rank === "NOTHING"
    ? 0
    : sum(values);
};

/**
 * Resolves hand by determining the value of its score, the name of the combination it contains
 * @param {Deck} hand Object that contains two arrays of suits and values
 * @returns {Resolution} Object that contain score, name of combination
 * @exemple resolveHand({suits:['C','D','D','H','S'], values:[2,2,8,11,11]}) => {score: 322, handRank: 'TWO_PAIRS'}
 */
export const resolveHand = (deck: string[]): HandResolution => {
  const hand = splitBySuitsAndValues(deck);
  const { suits, values } = hand;
  const sortedSuits = sortByType(suits);
  const sortedValues = sortByType(values);
  const ranking: string | any = getHandName(sortedSuits, sortedValues);
  return {
    score: HandRankings[ranking] + getPoints(ranking, sortedValues),
    handRank: ranking,
  };
};

/**
 * Resolves game by comparing score and check if bank is qualified
 * @param {HandResolution} bankResolvedHand Object that contains the bank resolved hand
 * @param {HandResolution} playerResolvedHand Object that contains the player resolved hand
 * @returns {GameResolution} Object that contain the resolution of game, with qualification of bank, winner and payout
 * @exemple resolveGame({score: 322, handRank: 'TWO_PAIRS'}, {score: 204, handRank: 'ONE_PAIRS'}) => {isBankQualified: true, winner : 'Bank', payout: 0}
 */
export const resolveGame = (
  bankResolvedHand: HandResolution,
  playerResolvedHand: HandResolution
): GameResolution => {
  const winner = getWinner(bankResolvedHand.score, playerResolvedHand.score);
  const playerRanking: string | any = playerResolvedHand.handRank;
  return {
    isBankQualified: isQualified(bankResolvedHand),
    winner,
    payout:
      isQualified(bankResolvedHand) && winner === "Player"
        ? HandPayouts[playerRanking]
        : 0,
  };
};
