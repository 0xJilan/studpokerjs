import { getPoints, resolveHand, resolveGame } from "../src/lib/resolver";
import { HandResolution, GameResolution } from "../src/lib/utils";
import { valuesOf, suitsOf, handOf } from "../src/lib/mocks";

describe("Calculates the value of the hand", () => {
  it("must add up all the values of the hand", () => {
    expect(getPoints("NOTHING", valuesOf.Nothing)).toEqual(0);
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
    ).toMatchObject<HandResolution>({
      score: 316,
      handRank: "TWO_PAIRS",
    });
  });
  it("must output this result for a given Hand of STRAIGHT", () => {
    expect(
      resolveHand({
        suits: suitsOf.Nothing,
        values: valuesOf.RegularStraight,
      })
    ).toMatchObject<HandResolution>({
      score: 530,
      handRank: "STRAIGHT",
    });
  });
  it("must output this result for a given Hand of ROYAL FLUSh", () => {
    expect(
      resolveHand({
        suits: suitsOf.Flush,
        values: valuesOf.HighStraight,
      })
    ).toMatchObject<HandResolution>({
      score: 1060,
      handRank: "ROYAL_FLUSH",
    });
  });
});

describe("Resolve game with by comparing bank and player hands", () => {
  it("must output this result for draw between bank and player with the same TWO PAIRS", () => {
    expect(
      resolveGame(handOf.TwoPairs, handOf.TwoPairs)
    ).toMatchObject<GameResolution>({
      isBankQualified: true,
      winner: "Bank",
      payout: 0,
    });
  });
  it("must output this result for bank win player with Straight", () => {
    expect(
      resolveGame(handOf.RegularStraight, handOf.TwoPairs)
    ).toMatchObject<GameResolution>({
      isBankQualified: true,
      winner: "Bank",
      payout: 0,
    });
  });
  it("must output this result for player win Bank with ThreeOfKind", () => {
    expect(
      resolveGame(handOf.TwoPairs, handOf.ThreeOfKind)
    ).toMatchObject<GameResolution>({
      isBankQualified: true,
      winner: "Player",
      payout: 3,
    });
  });
  it("must output this result for player win Bank but Bank not qualified", () => {
    expect(
      resolveGame(handOf.Nothing, handOf.RegularStraight)
    ).toMatchObject<GameResolution>({
      isBankQualified: false,
      winner: "Player",
      payout: 0,
    });
  });
});
