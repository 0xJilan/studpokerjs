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
  getHandName,
  isQualified,
  getWinner,
} from "../src/lib/checker";
import { valuesOf, suitsOf, handOf } from "../src/lib/mocks";

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
describe("Rank received hand", () => {
  it("must return NOTHING if contains neither combinaison of suits or values", () => {
    expect(getHandName(suitsOf.Nothing, valuesOf.Nothing)).toBe("NOTHING");
  });
  it("must return ACE_AND_KING if contains Ace & King", () => {
    expect(getHandName(suitsOf.Nothing, valuesOf.AceAndKing)).toBe(
      "ACE_AND_KING"
    );
  });
  it("values return ONE_PAIR if contains One pair", () => {
    expect(getHandName(suitsOf.Nothing, valuesOf.OnePair)).toBe("ONE_PAIR");
  });
  it("must return TWO_PAIRS if contains Two pairs", () => {
    expect(getHandName(suitsOf.Nothing, valuesOf.TwoPairs)).toBe("TWO_PAIRS");
  });
  it("must return THREE_OF_KIND if contains Three of kind", () => {
    expect(getHandName(suitsOf.Nothing, valuesOf.ThreeOfKind)).toBe(
      "THREE_OF_KIND"
    );
  });
  it("must return STRAIGHT if contains a straight", () => {
    expect(getHandName(suitsOf.Nothing, valuesOf.RegularStraight)).toBe(
      "STRAIGHT"
    );
  });
  it("must return FLUSH if contains a flush", () => {
    expect(getHandName(suitsOf.Flush, valuesOf.Nothing)).toBe("FLUSH");
  });
  it("must return FLUSH even if contains a two pairs", () => {
    expect(getHandName(suitsOf.Flush, valuesOf.TwoPairs)).toBe("FLUSH");
  });
  it("must return FULL if contains a One pair and Three Of Kind", () => {
    expect(getHandName(suitsOf.Nothing, valuesOf.Full)).toBe("FULL");
  });
  it("must return FOUR_OF_KIND if contains Four Of Kind", () => {
    expect(getHandName(suitsOf.Nothing, valuesOf.FourOfKind)).toBe(
      "FOUR_OF_KIND"
    );
  });
  it("must return STRAIGHT_FLUSH if contains  straight and flush", () => {
    expect(getHandName(suitsOf.Flush, valuesOf.RegularStraight)).toBe(
      "STRAIGHT_FLUSH"
    );
  });
  it("must return ROYAL_FLUSH even if contains Highstraight and flush", () => {
    expect(getHandName(suitsOf.Flush, valuesOf.HighStraight)).toBe(
      "ROYAL_FLUSH"
    );
  });
});
describe("check if resolved hand is qualified ", () => {
  it("true if score >= 100", () => {
    expect(isQualified(handOf.TwoPairs)).toBe(true);
  });
  it("false if score < 100", () => {
    expect(isQualified(handOf.Nothing)).toBe(false);
  });
});
describe("must return the winner", () => {
  it("Bank if score of the bank is more than player", () => {
    expect(getWinner(handOf.TwoPairs.score, handOf.AceAndKing.score)).toBe(
      "Bank"
    );
  });
  it("Bank if bank score equals player score", () => {
    expect(getWinner(handOf.AceAndKing.score, handOf.AceAndKing.score)).toBe(
      "Bank"
    );
  });
  it("Player if bank score is less than player score", () => {
    expect(getWinner(handOf.AceAndKing.score, handOf.TwoPairs.score)).toBe(
      "Player"
    );
  });
});
