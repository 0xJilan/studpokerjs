import {
  isAceKing,
  getDuplicates,
  isFlush,
  isStraight,
  isStraightFlush,
  isRoyalFlush,
} from "../src/lib/resolver";

describe("check if hand contains Ace & King", () => {
  const withoutAceAndKing = isAceKing([2, 10, 12, 5, 7]);
  const withOnlyKing = isAceKing([2, 10, 13, 5, 7]);
  const withOnlyAce = isAceKing([1, 10, 12, 5, 7]);
  const withAceAndKing = isAceKing([1, 10, 13, 5, 7]);
  it("must be false if not contains Ace & King", () => {
    expect(withoutAceAndKing).toBe(false);
  });
  it("must be false if only contain King ", () => {
    expect(withOnlyKing).toBe(false);
  });
  it("must be false if only contain Ace", () => {
    expect(withOnlyAce).toBe(false);
  });
  it("must be true if contain Ace & King", () => {
    expect(withAceAndKing).toBe(true);
  });
});

describe("check if hand contains duplicates values", () => {
  const withoutDuplicates = getDuplicates([1, 3, 5, 8, 11]).length;
  const withOnePair = getDuplicates([1, 3, 3, 8, 11]).length;
  const withTwoPairs = getDuplicates([1, 3, 3, 8, 8]).length;
  const withThreeOfKind = getDuplicates([2, 2, 2, 10, 12]).length;
  const withFourOfKind = getDuplicates([3, 3, 3, 3, 7]).length;
  const withFull = getDuplicates([5, 5, 5, 7, 7]).length;
  it("must return 0 if not contains any duplicates", () => {
    expect(withoutDuplicates).toBe(0);
  });
  it("must return 2 if contains One Pair", () => {
    expect(withOnePair).toBe(2);
  });
  it("must return 4 if contains Two pairs", () => {
    expect(withTwoPairs).toBe(4);
  });
  it("must return 3 if contains Three of Kind", () => {
    expect(withThreeOfKind).toBe(3);
  });
  it("must return 4 if contains Three of Kind", () => {
    expect(withFourOfKind).toBe(4);
  });
  it("must return 5 if contains Three of Kind", () => {
    expect(withFull).toBe(5);
  });
});

describe("check if hand contains flush", () => {
  const withoutFlush = isFlush(["S", "H", "C", "C", "H"]);
  const withFlush = isFlush(["C", "C", "C", "C", "C"]);
  it("must return false if not contains flush", () => {
    expect(withoutFlush).toBe(false);
  });
  it("must return true if contains flush", () => {
    expect(withFlush).toBe(true);
  });
});

describe("check if hand contains staight", () => {
  const withoutStraight = isStraight([1, 10, 4, 5, 9]);
  const withHighStraight = isStraight([1, 10, 11, 12, 13]);
  const withLowStraight = isStraight([1, 2, 3, 4, 5]);
  const withRegularStraight = isStraight([4, 5, 6, 7, 8]);
  const withStraightFlush = isStraightFlush(
    [4, 5, 6, 7, 8],
    ["C", "C", "C", "C", "C"]
  );
  const withoutFlushButStraight = isStraightFlush(
    [4, 5, 6, 7, 8],
    ["C", "C", "H", "C", "C"]
  );
  const withoutStraightButFlush = isStraightFlush(
    [4, 5, 6, 7, 12],
    ["C", "C", "C", "C", "C"]
  );
  const withoutStraightFlush = isStraightFlush(
    [4, 5, 6, 7, 12],
    ["C", "C", "D", "C", "C"]
  );

  const withRoyalFlush = isStraightFlush(
    [1, 10, 11, 12, 13],
    ["C", "C", "C", "C", "C"]
  );
  const withoutRoyalFlush = isStraightFlush(
    [1, 10, 11, 12, 13],
    ["C", "C", "D", "C", "C"]
  );

  it("it must return false if not contains straight", () => {
    expect(withoutStraight).toBe(false);
  });
  it("it must return true if contains high straight", () => {
    expect(withHighStraight).toBe(true);
  });
  it("it must return true if contains low straight", () => {
    expect(withLowStraight).toBe(true);
  });
  it("it must return true if contains regular straight", () => {
    expect(withRegularStraight).toBe(true);
  });
  it("it must return true if contains straight flush", () => {
    expect(withStraightFlush).toBe(true);
  });
  it("it must return false if contains straight but not flush", () => {
    expect(withoutFlushButStraight).toBe(false);
  });
  it("it must return false if contains flush but not straight", () => {
    expect(withoutStraightButFlush).toBe(false);
  });
  it("it must return false if not contains straight flush", () => {
    expect(withoutStraightFlush).toBe(false);
  });
  it("it must return true if contains royal flush", () => {
    expect(withRoyalFlush).toBe(true);
  });
  it("it must return false if not contains royal flush", () => {
    expect(withoutRoyalFlush).toBe(false);
  });
});
