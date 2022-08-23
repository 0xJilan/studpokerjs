import { getDuplicates } from "./checker";

export const isSuits = (currentValue: any): boolean =>
  currentValue === "H" ||
  currentValue === "D" ||
  currentValue === "C" ||
  currentValue === "S";

export const isValues = (currentValue: any): boolean =>
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
