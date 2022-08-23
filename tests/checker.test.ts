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
import { valuesOf, suitsOf } from "../src/lib/mocks";

describe("check if hand contains Ace & King", () => {
  it("must be false if not contains Ace & King", () => {
    expect(isAceKing(valuesOf.Nothing)).toBe(false);
  });
  it("must be false if only contain King ", () => {
    expect(isAceKing(valuesOf.OnlyKing)).toBe(false);
  });
  it("must be false if only contain Ace", () => {
    expect(isAceKing(valuesOf.OnlyAce)).toBe(false);
  });
  it("must be ACE_AND_KING if contain Ace & King", () => {
    expect(isAceKing(valuesOf.AceAndKing)).toBe("ACE_AND_KING");
  });
});

describe("check if hand contains duplicates values", () => {
  it("must return ONE_PAIR if contains One Pair", () => {
    expect(isOnePair(valuesOf.OnePair)).toBe("ONE_PAIR");
  });
  it("must return TWO_PAIRS if contains Two pairs", () => {
    expect(isTwoPairs(valuesOf.TwoPairs)).toBe("TWO_PAIRS");
  });
  it("must return THREE_OF_KIND if contains Three of Kind", () => {
    expect(isThreeOfKind(valuesOf.ThreeOfKind)).toBe("THREE_OF_KIND");
  });
  it("must return FOUR_OF_KIND if contains Four of Kind", () => {
    expect(isFourOfKind(valuesOf.FourOfKind)).toBe("FOUR_OF_KIND");
  });
  it("must return FULL if contains Full", () => {
    expect(isFull(valuesOf.Full)).toBe("FULL");
  });
});

describe("check if hand contains flush", () => {
  it("must return false if not contains Flush", () => {
    expect(isFlush(suitsOf.Nothing)).toBe(false);
  });
  it("must return FLUSH if contains Flush", () => {
    expect(isFlush(suitsOf.Flush)).toBe("FLUSH");
  });
});

describe("check if hand contains staight", () => {
  it("it must return false if not contains straight", () => {
    expect(isStraight(valuesOf.Nothing)).toBe(false);
  });
  it("it must return STRAIGHT if contains high straight", () => {
    expect(isStraight(valuesOf.HighStraight)).toBe("STRAIGHT");
  });
  it("it must return STRAIGHT if contains low straight", () => {
    expect(isStraight(valuesOf.LowStraight)).toBe("STRAIGHT");
  });
  it("it must return STRAIGHT if contains regular straight", () => {
    expect(isStraight(valuesOf.RegularStraight)).toBe("STRAIGHT");
  });
  it("it must return STRAIGHT_FLUSH if contains straight flush", () => {
    expect(isStraightFlush(suitsOf.Flush, valuesOf.RegularStraight)).toBe(
      "STRAIGHT_FLUSH"
    );
  });
  it("it must return false if contains straight but not flush", () => {
    expect(isStraightFlush(suitsOf.Nothing, valuesOf.RegularStraight)).toBe(
      false
    );
  });
  it("it must return false if contains flush but not straight", () => {
    expect(isStraightFlush(suitsOf.Flush, valuesOf.Nothing)).toBe(false);
  });
  it("it must return false if not contains straight flush", () => {
    expect(isStraightFlush(suitsOf.Nothing, valuesOf.Nothing)).toBe(false);
  });
  it("it must return ROYAL_FLUSH if contains royal flush", () => {
    expect(isRoyalFlush(suitsOf.Flush, valuesOf.HighStraight)).toBe(
      "ROYAL_FLUSH"
    );
  });
  it("it must return false if not contains royal flush", () => {
    expect(isRoyalFlush(suitsOf.Nothing, valuesOf.RegularStraight)).toBe(false);
  });
});
