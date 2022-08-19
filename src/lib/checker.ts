const getDuplicates = (values: number[]): number[] => {
  return values.filter(
    (value, index, array) =>
      array.lastIndexOf(value) != index || array.indexOf(value) != index
  );
};

const isHighStraight = (values: number[]): boolean =>
  [1, 10, 11, 12, 13].every((val, index) => val === values[index]);

const isRegularStraight = (values: number[]): boolean =>
  values.every((value, index, array) =>
    index < 4 ? value == array[index + 1] - 1 : value == array[index]
  );

export const isAceKing = (values: number[]): string | boolean =>
  values.includes(1) && values.includes(13) && "ACE_AND_KING";

export const isOnePair = (values: number[]): string | boolean =>
  getDuplicates(values).length === 2 && "ONE_PAIR";

export const isTwoPairs = (values: number[]): string | boolean =>
  getDuplicates(values).length === 4 &&
  getDuplicates(values)[0] !== getDuplicates(values)[3] &&
  "TWO_PAIRS";

export const isThreeOfKind = (values: number[]): string | boolean =>
  getDuplicates(values).length === 3 && "THREE_OF_KIND";

export const isStraight = (values: number[]): string | boolean =>
  (isHighStraight(values) || isRegularStraight(values)) && "STRAIGHT";

export const isFlush = (suits: string[]): string | boolean =>
  suits[0] === suits[4] && "FLUSH";

export const isFull = (values: number[]): string | boolean =>
  getDuplicates(values).length === 5 && "FULL";

export const isFourOfKind = (values: number[]): string | boolean =>
  getDuplicates(values).length === 4 &&
  getDuplicates(values)[0] === getDuplicates(values)[3] &&
  "FOUR_OF_KIND";

export const isStraightFlush = (
  suits: string[],
  values: number[]
): string | boolean =>
  isFlush(suits) && isRegularStraight(values) && "STRAIGHT_FLUSH";

export const isRoyalFlush = (
  suits: string[],
  values: number[]
): string | boolean =>
  isFlush(suits) && isHighStraight(values) && "ROYAL_FLUSH";
