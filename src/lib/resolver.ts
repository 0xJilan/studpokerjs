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
  sum,
} from "./checker";
import { HandRankings, HandPayouts, Resolution, HandName, Deck } from "./utils";

export const getRanking = (suits: string[], values: number[]): HandName => {
  const duplicates: number[] = getDuplicates(values);
  return (
    isRoyalFlush(suits, values) ||
    isStraightFlush(suits, values) ||
    isFourOfKind(duplicates) ||
    isFull(duplicates) ||
    isFlush(suits) ||
    isStraight(values) ||
    isThreeOfKind(duplicates) ||
    isTwoPairs(duplicates) ||
    isOnePair(duplicates) ||
    isAceKing(values) ||
    "NOTHING"
  );
};

const isOnlyContainNumbers = (array: any[]) =>
  array.every((value) => typeof value === "number");

const sortByType = (array: any[]) =>
  isOnlyContainNumbers(array) ? array.sort((a, b) => a - b) : array.sort();

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

export const resolveHand = (hand: Deck): Resolution => {
  const { suits, values } = hand;
  const sortedSuits = sortByType(suits);
  const sortedValues = sortByType(values);
  const ranking: string | any = getRanking(sortedSuits, sortedValues);
  return {
    score: HandRankings[ranking] + getPoints(ranking, sortedValues),
    handRank: ranking,
    payout: HandPayouts[ranking],
  };
};
//TODO: ADD A FUNCTION WHO COMPARE TWO HANDS AND RETURN WINNER
