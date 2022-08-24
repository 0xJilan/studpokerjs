import { HandName, HandResolution } from "./utils";
/**
 * Check if sorted array contains Ace(14) & King(13) combination
 * @param {number []} values Array of card values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isAceKing([4,7,9,13,14]) => "ACE_AND_KING"
 */
export declare const isAceKing: (values: number[]) => HandName;
/**
 * Extract all duplicates value from a sorted array
 * @param {number []} values Array of card values
 * @returns {number []} Array of all occurrences of duplicated values.
 * @exemple
 * * getDuplicates([2, 4, 4, 7, 9]) => [4, 4]
 * * getDuplicates([3,3,7,11,11]) => [3,3,11,11]
 */
export declare const getDuplicates: (values: number[]) => number[];
/**
 * Check if sorted array contains one pair
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isOnePair([2,4,6,6,11]) => "ONE_PAIR"
 */
export declare const isOnePair: (duplicatesValues: number[]) => HandName;
/**
 * Check if sorted array contains two pairs
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isTwoPairs([2,2,8,11,11]) => "TWO_PAIRS"
 */
export declare const isTwoPairs: (duplicatesValues: number[]) => HandName;
/**
 * Check if sorted array contains three same cards
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple isThreeOfKind([2,2,2,8,11]) => "THREE_OF_KIND"
 */
export declare const isThreeOfKind: (duplicatesValues: number[]) => HandName;
/**
 * Check if sorted array contains three of kind and one pair
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple  isFull([2,2,2,11,11]) => "FULL"
 */
export declare const isFull: (duplicatesValues: number[]) => HandName;
/**
 * Check if sorted array contains four same cards
 * @param {number []} duplicatesValues Array of duplicated values
 * @returns {HandName} 'COMBINATION_NAME'|| false
 * @exemple  isFourOfKind([2,2,2,2,11]) => "FOUR_OF_KIND"
 */
export declare const isFourOfKind: (duplicatesValues: number[]) => HandName;
/**
 * Sum values contains in array
 * @param {number []} values Array of card values
 * @returns {number} total of all added values
 * @exemple  sum([1,2,3,4,5]) => 15
 */
export declare const sum: (values: number[]) => number;
/**
 * Check if sorted array contains a low or regular straight
 * @param {number []} values Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isStraight([2,3,4,5,6])  => "STRAIGHT"
 */
export declare const isStraight: (values: number[]) => HandName;
/**
 * Check if sorted array contains a flush because 1st === 4th
 * @param {string []} suits Array of card suits
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isFlush(['C','C','C','C','C'])  => "FLUSH"
 */
export declare const isFlush: (suits: string[]) => HandName;
/**
 * Check if sorted array of suits contains a flush and sorted array of values is straight
 * @param {string []} suits Array of card suits
 * @param {number []} values Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isStraightFlush(['C','C','C','C','C'],[2,3,4,5,6])  => "STRAIGHT_FLUSH"
 */
export declare const isStraightFlush: (suits: string[], values: number[]) => HandName;
/**
 * Check if sorted array of suits contains a flush and if sorted values === 60 (sum of all values contained in high straight)
 * @param {string []} suits Array of card suits
 * @param {number []} values Array of card values
 * @returns {boolean} 'COMBINATION_NAME'|| false
 * @exemple isRoyalFlush(['C','C','C','C','C'],[10,11,12,13,14])  => "ROYAL_FLUSH"
 */
export declare const isRoyalFlush: (suits: string[], values: number[]) => HandName;
/**
 * Checks by hierarchical order the combination contained in two arrays of suits & values
 * @param {string []} suits Array of card suits
 * @param {number []} values Array of card values
 * @returns {HandName} 'COMBINATION_NAME'|| 'NOTHING'
 * @exemple getHandName(['C','D','H','H','S'],[2,4,6,6,11])  => "ONE_PAIR"
 */
export declare const getHandName: (suits: string[], values: number[]) => HandName;
/**
 * Check if resolved hand is qualified
 * @param {Resolution} resolvedHand Object containing score, combination name
 * @returns {boolean} true if score is equal to ACE_AND_KING or more || false
 * @exemple isQualified({score: 100, handRank: "ACE_AND_KING"})  => true
 */
export declare const isQualified: (resolvedHand: HandResolution) => boolean;
/**
 * Get winner between two players
 * @param {number} bankScore Score of Bank
 * @param {number} playerScore Score of Player
 * @returns {string} return player who have the best score. Bank win if score is equals or more than player score
 * @exemple getWinner(212, 345)  => 'Player';
 */
export declare const getWinner: (bankScore: number, playerScore: number) => string;
