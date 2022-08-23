import { getRanking, getPoints, resolveHand } from "../src/lib/resolver";
import { Resolution } from "../src/lib/utils";
//TODO: HANDLE MOKING OF TEST
const valuesOf = {
  Nothing: [3, 5, 7, 11, 12],
  AceAndKing: [5, 7, 10, 13, 14],
  OnePair: [3, 3, 8, 11, 14],
  TwoPairs: [3, 3, 8, 8, 14],
  ThreeOfKind: [2, 2, 2, 10, 12],
  RegularStraight: [4, 5, 6, 7, 8],
  HighStraight: [10, 11, 12, 13, 14],
  Full: [5, 5, 5, 7, 7],
  FourOfKind: [3, 3, 3, 3, 7],
};
const suitsOf = {
  Nothing: ["C", "C", "D", "H", "S"],
  Flush: ["C", "C", "C", "C", "C"],
};

describe("Rank received hand", () => {
  it("must return NOTHING if contains neither combinaison of suits or values", () => {
    expect(getRanking(suitsOf.Nothing, valuesOf.Nothing)).toBe("NOTHING");
  });
  it("must return ACE_AND_KING if contains Ace & King", () => {
    expect(getRanking(suitsOf.Nothing, valuesOf.AceAndKing)).toBe(
      "ACE_AND_KING"
    );
  });
  it("values return ONE_PAIR if contains One pair", () => {
    expect(getRanking(suitsOf.Nothing, valuesOf.OnePair)).toBe("ONE_PAIR");
  });
  it("must return TWO_PAIRS if contains Two pairs", () => {
    expect(getRanking(suitsOf.Nothing, valuesOf.TwoPairs)).toBe("TWO_PAIRS");
  });
  it("must return THREE_OF_KIND if contains Three of kind", () => {
    expect(getRanking(suitsOf.Nothing, valuesOf.ThreeOfKind)).toBe(
      "THREE_OF_KIND"
    );
  });
  it("must return STRAIGHT if contains a straight", () => {
    expect(getRanking(suitsOf.Nothing, valuesOf.RegularStraight)).toBe(
      "STRAIGHT"
    );
  });
  it("must return FLUSH if contains a flush", () => {
    expect(getRanking(suitsOf.Flush, valuesOf.Nothing)).toBe("FLUSH");
  });
  it("must return FLUSH even if contains a two pairs", () => {
    expect(getRanking(suitsOf.Flush, valuesOf.TwoPairs)).toBe("FLUSH");
  });
  it("must return FULL if contains a One pair and Three Of Kind", () => {
    expect(getRanking(suitsOf.Nothing, valuesOf.Full)).toBe("FULL");
  });
  it("must return FOUR_OF_KIND if contains Four Of Kind", () => {
    expect(getRanking(suitsOf.Nothing, valuesOf.FourOfKind)).toBe(
      "FOUR_OF_KIND"
    );
  });
  it("must return STRAIGHT_FLUSH if contains  straight and flush", () => {
    expect(getRanking(suitsOf.Flush, valuesOf.RegularStraight)).toBe(
      "STRAIGHT_FLUSH"
    );
  });
  it("must return ROYAL_FLUSH even if contains Highstraight and flush", () => {
    expect(getRanking(suitsOf.Flush, valuesOf.HighStraight)).toBe(
      "ROYAL_FLUSH"
    );
  });
});

describe("Calculates the value of the hand", () => {
  const NOTHING = getPoints("NOTHING", valuesOf.Nothing);
  const ONE_PAIR = getPoints("ONE_PAIR", valuesOf.OnePair);
  const TWO_PAIRS = getPoints("TWO_PAIRS", valuesOf.TwoPairs);
  const THREE_OF_KIND = getPoints("THREE_OF_KIND", valuesOf.ThreeOfKind);
  const FULL = getPoints("FULL", valuesOf.Full);
  const FOUR_OF_KIND = getPoints("FOUR_OF_KIND", valuesOf.FourOfKind);
  it("must add up all the values of the hand", () => {
    expect(NOTHING).toEqual(38);
  });
  it("must add up the value of each of the cards that make up the pair", () => {
    expect(ONE_PAIR).toEqual(6);
  });
  it("must add up the value of each of the cards that make up the highest pair", () => {
    expect(TWO_PAIRS).toEqual(16);
  });
  it("must add up the value of each of the cards that make up the Three Of Kind", () => {
    expect(THREE_OF_KIND).toEqual(6);
  });
  it("must add up the value of each of the cards that make up the Four Of Kind", () => {
    expect(FOUR_OF_KIND).toEqual(12);
  });
  it("must add up the value of each of the cards that make up the Three Of Kind who compose the full", () => {
    expect(FULL).toEqual(15);
  });
});

describe("Resolve hand with rank and points", () => {
  const TWOPAIRS = resolveHand({
    suits: ["C", "C", "D", "H", "S"],
    values: [3, 3, 8, 8, 14],
  });
  const STRAIGHT = resolveHand({
    suits: ["C", "C", "D", "D", "D"],
    values: [4, 5, 6, 7, 8],
  });
  const ROYALFLUSH = resolveHand({
    suits: ["C", "C", "C", "C", "C"],
    values: [10, 11, 12, 13, 14],
  });

  it("must return an object", () => {
    expect(typeof TWOPAIRS).toBe("object");
  });
  it("must output this result for a given Hand of TWO PAIRS", () => {
    expect(TWOPAIRS).toMatchObject<Resolution>({
      score: 316,
      handRank: "TWO_PAIRS",
      payout: 2,
    });
  });
  it("must output this result for a given Hand of STRAIGHT", () => {
    expect(STRAIGHT).toMatchObject<Resolution>({
      score: 530,
      handRank: "STRAIGHT",
      payout: 4,
    });
  });
  it("must output this result for a given Hand of ROYAL FLUSh", () => {
    expect(ROYALFLUSH).toMatchObject<Resolution>({
      score: 1060,
      handRank: "ROYAL_FLUSH",
      payout: 100,
    });
  });
});
