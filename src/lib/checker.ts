export const isAceKing = (values: number[]): string =>
  values.includes(1) && values.includes(13) && "ACE_AND_KING";

export const getDuplicates = (values: number[]): number[] => {
  return values.filter(
    (value, index, array) =>
      array.lastIndexOf(value) != index || array.indexOf(value) != index
  );
};
export const isOnePair = (values: number[]): string =>
  getDuplicates(values).length === 2 && "ONE_PAIR";

export const isTwoPairs = (values: number[]): string =>
  getDuplicates(values).length === 4 &&
  getDuplicates(values)[0] !== getDuplicates(values)[3] &&
  "TWO_PAIRS";

export const isThreeOfKind = (values: number[]): string =>
  getDuplicates(values).length === 3 && "THREE_OF_KIND";

export const isFull = (values: number[]): string =>
  getDuplicates(values).length === 5 && "FULL";

export const isFourOfKind = (values: number[]): string =>
  getDuplicates(values).length === 4 &&
  getDuplicates(values)[0] === getDuplicates(values)[3] &&
  "FOUR_OF_KIND";

const isHighStraight = (values: number[]): boolean =>
  [1, 10, 11, 12, 13].every((val, index) => val === values[index]);

const isRegularStraight = (values: number[]): boolean =>
  values.every((value, index, array) =>
    index < 4 ? value == array[index + 1] - 1 : value == array[index]
  );

export const isStraight = (values: number[]): string =>
  (isHighStraight(values) || isRegularStraight(values)) && "STRAIGHT";

export const isFlush = (suits: string[]): string =>
  suits[0] === suits[4] && "FLUSH";

export const isStraightFlush = (suits: string[], values: number[]): string =>
  isFlush(suits) && isRegularStraight(values) && "STRAIGHT_FLUSH";

export const isRoyalFlush = (suits: string[], values: number[]): string =>
  isFlush(suits) && isHighStraight(values) && "ROYAL_FLUSH";
