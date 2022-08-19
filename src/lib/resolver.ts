export const isAceKing = (values: number[]): boolean =>
  values.includes(1) && values.includes(13);

export const getDuplicates = (values: number[]): number[] => {
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
export const isFlush = (suits: string[]): boolean => suits[0] === suits[4];

export const isStraight = (values: number[]): boolean =>
  isHighStraight(values) || isRegularStraight(values);

export const isStraightFlush = (values: number[], suits: string[]): boolean =>
  isFlush(suits) && isRegularStraight(values);

export const isRoyalFlush = (values: number[], suits: string[]): boolean =>
  isFlush(suits) && isHighStraight(values);
