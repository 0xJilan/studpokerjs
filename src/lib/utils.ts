export interface Deck {
  suits: string[];
  values: number[];
}
export type HandName = string | boolean;
export interface HandResolution {
  score: number | any;
  handRank: string;
}

export interface GameResolution {
  isBankQualified: boolean;
  winner: string;
  payout: number | any;
}
export enum HandRankings {
  NOTHING = 0,
  ACE_AND_KING = 100,
  ONE_PAIR = 200,
  TWO_PAIRS = 300,
  THREE_OF_KIND = 400,
  STRAIGHT = 500,
  FLUSH = 600,
  FULL = 700,
  FOUR_OF_KIND = 800,
  STRAIGHT_FLUSH = 900,
  ROYAL_FLUSH = 1000,
}
export enum HandPayouts {
  NOTHING = 0,
  ACE_AND_KING = 0,
  ONE_PAIR = 1,
  TWO_PAIRS = 2,
  THREE_OF_KIND = 3,
  STRAIGHT = 4,
  FLUSH = 5,
  FULL = 7,
  FOUR_OF_KIND = 20,
  STRAIGHT_FLUSH = 50,
  ROYAL_FLUSH = 100,
}
