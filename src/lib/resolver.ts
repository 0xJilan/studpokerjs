import { getDuplicates, sum, getHandName } from "./checker";
import { HandRankings, HandPayouts, Resolution, Deck } from "./utils";

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
    : sum(values);
};

/**
 * Resolves a hand by determining the value of its score, the name of the combination it contains and the coeff to paid
 * @param {Deck} hand Object that contains two arrays of suits and values
 * @returns {Resolution} Object tha contain score, name of combination and payout
 * @exemple resolveHand({suits:['C','D','D','H','S'], values:[2,2,8,11,11]}) => {score: 322, handRank: 'TWO_PAIRS', payout: 2}
 */
export const resolveHand = (hand: Deck): Resolution => {
  const { suits, values } = hand;
  const sortedSuits = sortByType(suits);
  const sortedValues = sortByType(values);
  const ranking: string | any = getHandName(sortedSuits, sortedValues);
  return {
    score: HandRankings[ranking] + getPoints(ranking, sortedValues),
    handRank: ranking,
    payout: HandPayouts[ranking],
  };
};

//TODO: ADD A FUNCTION WHO COMPARE TWO HANDS AND RETURN WINNER
