import { getDuplicates } from "./checker";

/**
 * Check if a given letter is a valid suits
 * @param {string} currentValue string value to check
 * @returns {boolean} true if is a suits || false
 * @exemple isSuits('V') => false
 */
export const isSuits = (currentValue: string): boolean =>
  currentValue === "H" ||
  currentValue === "D" ||
  currentValue === "C" ||
  currentValue === "S";

/**
 * Check if a given number is a valid value
 * @param {number} currentValue number value to check
 * @returns {boolean} true if is a number include between 2 & 14 || false
 * @exemple isValues(15) => false
 */
export const isValues = (currentValue: number): boolean =>
  typeof currentValue == "number" && currentValue >= 2 && currentValue <= 14;

export const valuesOf = {
  Nothing: [3, 5, 7, 11, 12],
  OnlyAce: [5, 7, 10, 11, 14],
  OnlyKing: [5, 4, 7, 10, 13],
  AceAndKing: [5, 7, 10, 13, 14],
  OnePair: getDuplicates([3, 3, 8, 11, 14]),
  TwoPairs: getDuplicates([3, 3, 8, 8, 14]),
  ThreeOfKind: getDuplicates([2, 2, 2, 10, 12]),
  LowStraight: [2, 3, 4, 5, 14],
  RegularStraight: [4, 5, 6, 7, 8],
  HighStraight: [10, 11, 12, 13, 14],
  Full: getDuplicates([5, 5, 5, 7, 7]),
  FourOfKind: getDuplicates([3, 3, 3, 3, 7]),
};
export const suitsOf = {
  Nothing: ["C", "C", "D", "H", "S"],
  Flush: ["C", "C", "C", "C", "C"],
};
export const deckOf = {
  AceAndKing: ["5-C", "7-C", "10-D", "13-H", "14-S"],
  TwoPairs: ["3-C", "3-C", "8-D", "8-H", "14-S"],
  RegularStraight: ["4-C", "5-C", "6-D", "7-H", "8-S"],
  RoyalFlush: ["10-C", "11-C", "12-C", "13-C", "14-C"],
};

export const handOf = {
  Nothing: { score: 0, handRank: "NOTHING" },
  AceAndKing: { score: 100, handRank: "ACE_AND_KINGS" },
  TwoPairs: { score: 320, handRank: "TWO_PAIRS" },
  ThreeOfKind: { score: 445, handRank: "THREE_OF_KIND" },
  RegularStraight: { score: 536, handRank: "STRAIGHT" },
};
