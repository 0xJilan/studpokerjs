import { HandName } from "./utils";

export const isAceKing = (values: number[]): HandName =>
  values.includes(14) && values.includes(13) && "ACE_AND_KING";

export const getDuplicates = (values: number[]): number[] => {
  return values.filter(
    (value, index, array) =>
      array.lastIndexOf(value) != index || array.indexOf(value) != index
  );
};
export const isOnePair = (values: number[]): HandName =>
  getDuplicates(values).length === 2 && "ONE_PAIR";

export const isTwoPairs = (values: number[]): HandName =>
  getDuplicates(values).length === 4 &&
  getDuplicates(values)[0] !== getDuplicates(values)[3] &&
  "TWO_PAIRS";

export const isThreeOfKind = (values: number[]): HandName =>
  getDuplicates(values).length === 3 && "THREE_OF_KIND";

export const isFull = (values: number[]): HandName =>
  getDuplicates(values).length === 5 && "FULL";

export const isFourOfKind = (values: number[]): HandName =>
  getDuplicates(values).length === 4 &&
  getDuplicates(values)[0] === getDuplicates(values)[3] &&
  "FOUR_OF_KIND";

export const sum = (values: number[]): number =>
  values.reduce((accumulotor, value) => accumulotor + value);

const isLowStraight = (values: number[]): HandName =>
  [2, 3, 4, 5, 14].every((val, index) => val === values[index]);

const isRegularStraight = (values: number[]): HandName =>
  values.every((value, index, array) =>
    index < 4 ? value == array[index + 1] - 1 : value == array[index]
  );

export const isStraight = (values: number[]): HandName =>
  (isLowStraight(values) || isRegularStraight(values)) && "STRAIGHT";

export const isFlush = (suits: string[]): HandName =>
  suits[0] === suits[4] && "FLUSH";

export const isStraightFlush = (suits: string[], values: number[]): HandName =>
  isFlush(suits) && isRegularStraight(values) && "STRAIGHT_FLUSH";

export const isRoyalFlush = (suits: string[], values: number[]): HandName =>
  isFlush(suits) && sum(values) === 60 && "ROYAL_FLUSH";
