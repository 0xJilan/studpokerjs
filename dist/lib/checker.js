"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWinner = exports.isQualified = exports.getHandName = exports.isRoyalFlush = exports.isStraightFlush = exports.isFlush = exports.isStraight = exports.sum = exports.isFourOfKind = exports.isFull = exports.isThreeOfKind = exports.isTwoPairs = exports.isOnePair = exports.getDuplicates = exports.isAceKing = void 0;
/**
 * Check if sorted array contains Ace(14) & King(13) combination
 * @param {number []} values Array of card values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isAceKing([4,7,9,13,14]) => "ACE_AND_KING"
 */
const isAceKing = (values) => values.includes(14) && values.includes(13) && "ACE_AND_KING";
exports.isAceKing = isAceKing;
/**
 * Extract all duplicates value from a sorted array
 * @param {number []} values Array of card values
 * @returns {number []} Array of all occurrences of duplicated values.
 * @exemple
 * * getDuplicates([2, 4, 4, 7, 9]) => [4, 4]
 * * getDuplicates([3,3,7,11,11]) => [3,3,11,11]
 */
const getDuplicates = (values) => {
    return values.filter((value, index, array) => array.lastIndexOf(value) != index || array.indexOf(value) != index);
};
exports.getDuplicates = getDuplicates;
/**
 * Check if sorted array contains one pair
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isOnePair([2,4,6,6,11]) => "ONE_PAIR"
 */
const isOnePair = (duplicatesValues) => duplicatesValues.length === 2 && "ONE_PAIR";
exports.isOnePair = isOnePair;
/**
 * Check if sorted array contains two pairs
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isTwoPairs([2,2,8,11,11]) => "TWO_PAIRS"
 */
const isTwoPairs = (duplicatesValues) => duplicatesValues.length === 4 &&
    duplicatesValues[0] !== duplicatesValues[3] &&
    "TWO_PAIRS";
exports.isTwoPairs = isTwoPairs;
/**
 * Check if sorted array contains three same cards
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isThreeOfKind([2,2,2,8,11]) => "THREE_OF_KIND"
 */
const isThreeOfKind = (duplicatesValues) => duplicatesValues.length === 3 && "THREE_OF_KIND";
exports.isThreeOfKind = isThreeOfKind;
/**
 * Check if sorted array contains three of kind and one pair
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple  isFull([2,2,2,11,11]) => "FULL"
 */
const isFull = (duplicatesValues) => duplicatesValues.length === 5 && "FULL";
exports.isFull = isFull;
/**
 * Check if sorted array contains four same cards
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple  isFourOfKind([2,2,2,2,11]) => "FOUR_OF_KIND"
 */
const isFourOfKind = (duplicatesValues) => duplicatesValues.length === 4 &&
    duplicatesValues[0] === duplicatesValues[3] &&
    "FOUR_OF_KIND";
exports.isFourOfKind = isFourOfKind;
/**
 * Sum values contains in array
 * @param {number []} values Array of card values
 * @returns {number} total of all added values
 * @exemple  sum([1,2,3,4,5]) => 15
 */
const sum = (values) => values.reduce((accumulotor, value) => accumulotor + value);
exports.sum = sum;
/**
 * Check if sorted array contains a straight with As(14) as One
 * @param {number []} values Array of card values
 * @returns {boolean} true || false
 * @exemple
 * * isLowStraight([2,3,4,5,14]) => true
 * * isLowStraight([2,3,4,5,6]) => false
 */
const isLowStraight = (values) => [2, 3, 4, 5, 14].every((val, index) => val === values[index]);
/**
 * Check if each value in sorted array is equal to value n+1 to deduct that all cards are represent straight
 * @param {number []} values Array of card values
 * @returns {boolean} true || false
 * @exemple
 * * isRegularStraight([2,3,4,5,6]) => true
 * * isRegularStraight([2,3,4,5,7]) => false
 */
const isRegularStraight = (values) => values.every((value, index, array) => index < 4 ? value == array[index + 1] - 1 : value == array[index]);
/**
 * Check if sorted array contains a low or regular straight
 * @param {number []} values Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isStraight([2,3,4,5,6])  => "STRAIGHT"
 */
const isStraight = (values) => (isLowStraight(values) || isRegularStraight(values)) && "STRAIGHT";
exports.isStraight = isStraight;
/**
 * Check if sorted array contains a flush because 1st === 4th
 * @param {string []} suits Array of card suits
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isFlush(['C','C','C','C','C'])  => "FLUSH"
 */
const isFlush = (suits) => suits[0] === suits[4] && "FLUSH";
exports.isFlush = isFlush;
/**
 * Check if sorted array of suits contains a flush and sorted array of values is straight
 * @param {string []} suits Array of card suits
 * @param {number []} values Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isStraightFlush(['C','C','C','C','C'],[2,3,4,5,6])  => "STRAIGHT_FLUSH"
 */
const isStraightFlush = (suits, values) => (0, exports.isFlush)(suits) && isRegularStraight(values) && "STRAIGHT_FLUSH";
exports.isStraightFlush = isStraightFlush;
/**
 * Check if sorted array of suits contains a flush and if sorted values === 60 (sum of all values contained in high straight)
 * @param {string []} suits Array of card suits
 * @param {number []} values Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isRoyalFlush(['C','C','C','C','C'],[10,11,12,13,14])  => "ROYAL_FLUSH"
 */
const isRoyalFlush = (suits, values) => (0, exports.isFlush)(suits) && (0, exports.sum)(values) === 60 && "ROYAL_FLUSH";
exports.isRoyalFlush = isRoyalFlush;
/**
 * Checks by hierarchical order the combination contained in two arrays of suits & values
 * @param {string []} suits Array of card suits
 * @param {number []} values Array of card values
 * @returns {HandName} 'COMBINATION_NAME'|| 'NOTHING'
 * @exemple getHandName(['C','D','H','H','S'],[2,4,6,6,11])  => "ONE_PAIR"
 */
const getHandName = (suits, values) => {
    const duplicates = (0, exports.getDuplicates)(values);
    return ((0, exports.isRoyalFlush)(suits, values) ||
        (0, exports.isStraightFlush)(suits, values) ||
        (0, exports.isFourOfKind)(duplicates) ||
        (0, exports.isFull)(duplicates) ||
        (0, exports.isFlush)(suits) ||
        (0, exports.isStraight)(values) ||
        (0, exports.isThreeOfKind)(duplicates) ||
        (0, exports.isTwoPairs)(duplicates) ||
        (0, exports.isOnePair)(duplicates) ||
        (0, exports.isAceKing)(values) ||
        "NOTHING");
};
exports.getHandName = getHandName;
/**
 * Check if resolved hand is qualified
 * @param {Resolution} resolvedHand Object containing score, combination name
 * @returns {boolean} true if score is equal to ACE_AND_KING or more || false
 * @exemple isQualified({score: 100, handRank: "ACE_AND_KING"})  => true
 */
const isQualified = (resolvedHand) => resolvedHand.score >= 100;
exports.isQualified = isQualified;
/**
 * Get winner between two players
 * @param {number} bankScore Score of Bank
 * @param {number} playerScore Score of Player
 * @returns {string} return player who have the best score. Bank win if score is equals or more than player score
 * @exemple getWinner(212, 345)  => 'Player';
 */
const getWinner = (bankScore, playerScore) => bankScore >= playerScore ? "Bank" : "Player";
exports.getWinner = getWinner;
//# sourceMappingURL=checker.js.map