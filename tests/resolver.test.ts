import { getRanking, getPoints, resolveHand } from "../src/lib/resolver";
import { Resolution } from "../src/lib/utils";
import { valuesOf, suitsOf } from "../src/lib/mocks";

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
  it("must add up all the values of the hand", () => {
    expect(getPoints("NOTHING", valuesOf.Nothing)).toEqual(38);
  });
  it("must add up the value of each of the cards that make up the pair", () => {
    expect(getPoints("ONE_PAIR", valuesOf.OnePair)).toEqual(6);
  });
  it("must add up the value of each of the cards that make up the highest pair", () => {
    expect(getPoints("TWO_PAIRS", valuesOf.TwoPairs)).toEqual(16);
  });
  it("must add up the value of each of the cards that make up the Three Of Kind", () => {
    expect(getPoints("THREE_OF_KIND", valuesOf.ThreeOfKind)).toEqual(6);
  });
  it("must add up the value of the 3 same cards who compose the Full", () => {
    expect(getPoints("FULL", valuesOf.Full)).toEqual(15);
  });
  it("must add up the value of each of the cards that make up the Four Of Kind", () => {
    expect(getPoints("FOUR_OF_KIND", valuesOf.FourOfKind)).toEqual(12);
  });
});

describe("Resolve hand with rank and points", () => {
  it("must return an object", () => {
    expect(
      typeof resolveHand({
        suits: suitsOf.Nothing,
        values: valuesOf.TwoPairs,
      })
    ).toBe("object");
  });
  it("must output this result for a given Hand of TWO PAIRS", () => {
    expect(
      resolveHand({
        suits: suitsOf.Nothing,
        values: valuesOf.TwoPairs,
      })
    ).toMatchObject<Resolution>({
      score: 316,
      handRank: "TWO_PAIRS",
      payout: 2,
    });
  });
  it("must output this result for a given Hand of STRAIGHT", () => {
    expect(
      resolveHand({
        suits: suitsOf.Nothing,
        values: valuesOf.RegularStraight,
      })
    ).toMatchObject<Resolution>({
      score: 530,
      handRank: "STRAIGHT",
      payout: 4,
    });
  });
  it("must output this result for a given Hand of ROYAL FLUSh", () => {
    expect(
      resolveHand({
        suits: suitsOf.Flush,
        values: valuesOf.HighStraight,
      })
    ).toMatchObject<Resolution>({
      score: 1060,
      handRank: "ROYAL_FLUSH",
      payout: 100,
    });
  });
});
