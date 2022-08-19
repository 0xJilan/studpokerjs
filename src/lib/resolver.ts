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
} from "./checker";

enum HandRankings {
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
enum HandPayouts {
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
interface Resolution {
  score: number;
  handRank: string;
  payoutCoeff: number;
}

{
  /**
const handResolver = (hand: any[][]): Resolution => {
  const [suits, values] = hand;
  const handsToTest = [isRoyalFlush(suits, values), isStraightFlush(suits, values),  isFourOfKind(suits, values), isFull(suits, values), isFlush(suits, values), isStraight(suits, values), isThreeOfKind(suits, values),  isTwoPairs(suits, values), isOnePair(suits, values), isAceKing(suits, values)];
  const handResult = handsToTest.find(toTest => typeof toTest === 'string' ) || 'NOTHING';   

  const getRank = HandRankings[handResult];
  return { score: 0, handRank: "test", payoutCoeff: 0 };
};
*/
}
