import {
  isAceKing,
  getDuplicates,
  isOnePair,
  isTwoPairs,
  isThreeOfKind,
  isStraight,
  isFlush,
  isFull,
  isFourOfKind,
  isStraightFlush,
  isRoyalFlush,
} from "./checker";
import { HandRankings, HandPayouts, Resolution } from "./utils";

export const getRanking = (suits: string[], values: number[]): string => {
  return (
    isRoyalFlush(suits, values) ||
    isStraightFlush(suits, values) ||
    isFourOfKind(values) ||
    isFull(values) ||
    isFlush(suits) ||
    isStraight(values) ||
    isThreeOfKind(values) ||
    isTwoPairs(values) ||
    isOnePair(values) ||
    isAceKing(values) ||
    "NOTHING"
  );
};

const convertAndSortAceValue = (values: number[]): number[] =>
  [...values].map((value) => (value === 1 ? 14 : value)).sort((a, b) => a - b);

const sum = (values: number[]): number =>
  values.reduce((accumulotor, value) => accumulotor + value);

export const getPoints = (rank: string, values: number[]): number => {
  const convertedValues = convertAndSortAceValue(values);
  const duplicates = getDuplicates(convertedValues);
  return rank === "ONE_PAIR" ||
    rank === "THREE_OF_KIND" ||
    rank === "FOUR_OF_KIND"
    ? sum(duplicates)
    : rank === "TWO_PAIRS"
    ? sum(duplicates.slice(2))
    : rank === "FULL"
    ? duplicates[2] * 3
    : sum(convertedValues);
};

export const resolveHand = (hand: any[][]): Resolution => {
  const [suits, values] = hand;
  const ranking: string | any = getRanking(suits, values);
  const rank: number | any = HandRankings[ranking];
  const points: number = getPoints(ranking, values);
  const coeff: number | any = HandPayouts[ranking];
  return {
    score: rank + points,
    handRank: ranking,
    payout: coeff,
  };
};
