import { HandName } from "./utils";

/**
 * Check if sorted array contains Ace(14) & King(13) combination
 * @param {number []} values Array of card values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isAceKing([4,7,9,13,14]) => "ACE_AND_KING"
 */
export const isAceKing = (values: number[]): HandName =>
  values.includes(14) && values.includes(13) && "ACE_AND_KING";

/**
 * Extract all duplicates value from a sorted array
 * @param {number []} values Array of card values
 * @returns {number []} Array of all occurrences of duplicated values.
 * @exemple
 * * getDuplicates([2, 4, 4, 7, 9]) => [4, 4]
 * * getDuplicates([3,3,7,11,11]) => [3,3,11,11]
 */
export const getDuplicates = (values: number[]): number[] => {
  return values.filter(
    (value, index, array) =>
      array.lastIndexOf(value) != index || array.indexOf(value) != index
  );
};

/**
 * Check if sorted array contains one pair
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isOnePair([2,4,6,6,11]) => "ONE_PAIR"
 */
export const isOnePair = (duplicatesValues: number[]): HandName =>
  duplicatesValues.length === 2 && "ONE_PAIR";

/**
 * Check if sorted array contains two pairs
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isTwoPairs([2,2,8,11,11]) => "TWO_PAIRS"
 */
export const isTwoPairs = (duplicatesValues: number[]): HandName =>
  duplicatesValues.length === 4 &&
  duplicatesValues[0] !== duplicatesValues[3] &&
  "TWO_PAIRS";

/**
 * Check if sorted array contains three same cards
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isThreeOfKind([2,2,2,8,11]) => "THREE_OF_KIND"
 */
export const isThreeOfKind = (duplicatesValues: number[]): HandName =>
  duplicatesValues.length === 3 && "THREE_OF_KIND";

/**
 * Check if sorted array contains three of kind and one pair
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple  isFull([2,2,2,11,11]) => "FULL"
 */
export const isFull = (duplicatesValues: number[]): HandName =>
  duplicatesValues.length === 5 && "FULL";

/**
 * Check if sorted array contains four same cards
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple  isFourOfKind([2,2,2,2,11]) => "FOUR_OF_KIND"
 */
export const isFourOfKind = (duplicatesValues: number[]): HandName =>
  duplicatesValues.length === 4 &&
  duplicatesValues[0] === duplicatesValues[3] &&
  "FOUR_OF_KIND";

/**
 * Sum values contains in array
 * @param {number []} values Array of card values
 * @returns {number} total of all added values
 * @exemple  sum([1,2,3,4,5]) => 15
 */
export const sum = (values: number[]): number =>
  values.reduce((accumulotor, value) => accumulotor + value);

/**
 * Check if sorted array contains a straight with As(14) as One
 * @param {number []} values Array of card values
 * @returns {boolean} true || false
 * @exemple
 * * isLowStraight([2, 3, 4, 5, 14]) => true
 * * isLowStraight([2, 3, 4, 5, 6]) => false
 */
const isLowStraight = (values: number[]): boolean =>
  [2, 3, 4, 5, 14].every((val, index) => val === values[index]);

/**
 * Check if each value in sorted array is equal to value n+1 to deduct that all cards are represent straight
 * @param {number []} values Array of card values
 * @returns {boolean} true || false
 * @exemple
 * * isRegularStraight([2, 3, 4, 5, 6]) => true
 * * isRegularStraight([2, 3, 4, 5, 7]) => false
 */
const isRegularStraight = (values: number[]): HandName =>
  values.every((value, index, array) =>
    index < 4 ? value == array[index + 1] - 1 : value == array[index]
  );

/**
 * Check if sorted array contains a low or regular straight
 * @param {number []} values Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isStraight([2, 3, 4, 5, 6])  => "STRAIGHT"
 */
export const isStraight = (values: number[]): HandName =>
  (isLowStraight(values) || isRegularStraight(values)) && "STRAIGHT";

/**
 * Check if sorted array contains a flush because 1st === 4th
 * @param {string []} suits Array of card suits
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isFlush(['C', 'C', 'C', 'C', 'C'])  => "FLUSH"
 */
export const isFlush = (suits: string[]): HandName =>
  suits[0] === suits[4] && "FLUSH";

/**
 * Check if sorted array of suits contains a flush and sorted array of values is straight
 * @param {string []} suits Array of card suits
 * @param {string []} suits Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isStraightFlush(['C', 'C', 'C', 'C', 'C'], [2, 3, 4, 5, 6])  => "STRAIGHT_FLUSH"
 */
export const isStraightFlush = (suits: string[], values: number[]): HandName =>
  isFlush(suits) && isRegularStraight(values) && "STRAIGHT_FLUSH";

/**
 * Check if sorted array of suits contains a flush and if sorted values === 60 (sum of all values contained in high straight)
 * @param {string []} suits Array of card suits
 * @param {string []} suits Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isRoyalFlush(['C', 'C', 'C', 'C', 'C'], [10, 11, 12, 13, 14])  => "ROYAL_FLUSH"
 */
export const isRoyalFlush = (suits: string[], values: number[]): HandName =>
  isFlush(suits) && sum(values) === 60 && "ROYAL_FLUSH";
