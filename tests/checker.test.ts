import {
  isAceKing,
  isOnePair,
  isTwoPairs,
  isThreeOfKind,
  isStraight,
  isFlush,
  isFull,
  isFourOfKind,
  isStraightFlush,
  isRoyalFlush,
} from "../src/lib/checker";

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
  it("must be ACE_AND_KING if contain Ace & King", () => {
    expect(withAceAndKing).toBe("ACE_AND_KING");
  });
});

describe("check if hand contains duplicates values", () => {
  const withOnePair = isOnePair([1, 3, 3, 8, 11]);
  const withTwoPairs = isTwoPairs([1, 3, 3, 8, 8]);
  const withThreeOfKind = isThreeOfKind([2, 2, 2, 10, 12]);
  const withFourOfKind = isFourOfKind([3, 3, 3, 3, 7]);
  const withFull = isFull([5, 5, 5, 7, 7]);

  it("must return ONE_PAIR if contains One Pair", () => {
    expect(withOnePair).toBe("ONE_PAIR");
  });
  it("must return TWO_PAIRS if contains Two pairs", () => {
    expect(withTwoPairs).toBe("TWO_PAIRS");
  });
  it("must return THREE_OF_KIND if contains Three of Kind", () => {
    expect(withThreeOfKind).toBe("THREE_OF_KIND");
  });
  it("must return FOUR_OF_KIND if contains Four of Kind", () => {
    expect(withFourOfKind).toBe("FOUR_OF_KIND");
  });
  it("must return FULL if contains Full", () => {
    expect(withFull).toBe("FULL");
  });
});

describe("check if hand contains flush", () => {
  const withoutFlush = isFlush(["S", "H", "C", "C", "H"]);
  const withFlush = isFlush(["C", "C", "C", "C", "C"]);
  it("must return false if not contains Flush", () => {
    expect(withoutFlush).toBe(false);
  });
  it("must return FLUSH if contains Flush", () => {
    expect(withFlush).toBe("FLUSH");
  });
});

describe("check if hand contains staight", () => {
  const withoutStraight = isStraight([1, 10, 4, 5, 9]);
  const withHighStraight = isStraight([1, 10, 11, 12, 13]);
  const withLowStraight = isStraight([1, 2, 3, 4, 5]);
  const withRegularStraight = isStraight([4, 5, 6, 7, 8]);
  const withStraightFlush = isStraightFlush(
    ["C", "C", "C", "C", "C"],
    [4, 5, 6, 7, 8]
  );
  const withoutFlushButStraight = isStraightFlush(
    ["C", "C", "C", "C", "H"],
    [4, 5, 6, 7, 8]
  );
  const withoutStraightButFlush = isStraightFlush(
    ["C", "C", "C", "C", "C"],
    [4, 5, 6, 7, 12]
  );
  const withoutStraightFlush = isStraightFlush(
    ["C", "C", "C", "C", "D"],
    [4, 5, 6, 7, 12]
  );

  const withRoyalFlush = isRoyalFlush(
    ["C", "C", "C", "C", "C"],
    [1, 10, 11, 12, 13]
  );
  const withoutRoyalFlush = isRoyalFlush(
    ["C", "C", "C", "C", "D"],
    [1, 10, 11, 12, 13]
  );

  it("it must return false if not contains straight", () => {
    expect(withoutStraight).toBe(false);
  });
  it("it must return STRAIGHT if contains high straight", () => {
    expect(withHighStraight).toBe("STRAIGHT");
  });
  it("it must return STRAIGHT if contains low straight", () => {
    expect(withLowStraight).toBe("STRAIGHT");
  });
  it("it must return STRAIGHT if contains regular straight", () => {
    expect(withRegularStraight).toBe("STRAIGHT");
  });
  it("it must return STRAIGHT_FLUSH if contains straight flush", () => {
    expect(withStraightFlush).toBe("STRAIGHT_FLUSH");
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
  it("it must return ROYAL_FLUSH if contains royal flush", () => {
    expect(withRoyalFlush).toBe("ROYAL_FLUSH");
  });
  it("it must return false if not contains royal flush", () => {
    expect(withoutRoyalFlush).toBe(false);
  });
});
