import { HandResolution, GameResolution, Deck } from "./utils";
/**
 * Get the score of a given name depending of combinaition name and sum of values contained
 * @param {string} rank Combination name
 * @param {number []} values Array of values
 * @returns {number} Total value added
 * @exemple getPoints('FLUSH', [ 2, 4, 5, 9, 11]) => 31
 */
export declare const getPoints: (rank: string, values: number[]) => number;
/**
 * Resolves hand by determining the value of its score, the name of the combination it contains
 * @param {Deck} hand Object that contains two arrays of suits and values
 * @returns {Resolution} Object that contain score, name of combination
 * @exemple resolveHand({suits:['C','D','D','H','S'], values:[2,2,8,11,11]}) => {score: 322, handRank: 'TWO_PAIRS'}
 */
export declare const resolveHand: (hand: Deck) => HandResolution;
/**
 * Resolves game by comparing score and check if bank is qualified
 * @param {HandResolution} bankResolvedHand Object that contains the bank resolved hand
 * @param {HandResolution} playerResolvedHand Object that contains the player resolved hand
 * @returns {GameResolution} Object that contain the resolution of game, with qualification of bank, winner and payout
 * @exemple resolveGame({score: 322, handRank: 'TWO_PAIRS'}, {score: 204, handRank: 'ONE_PAIRS'}) => {isBankQualified: true, winner : 'Bank', payout: 0}
 */
export declare const resolveGame: (bankResolvedHand: HandResolution, playerResolvedHand: HandResolution) => GameResolution;
