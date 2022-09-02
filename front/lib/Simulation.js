import {
  getRandomCardsShuffledFromDeck,
  resolveHand,
  resolveGame,
} from "studpokerjs";

export const Simulation = () => {
  let REPETITION = 20;
  let INITIATOR = 0;
  let userStats = {
    hands: 0,
    wallet: 10000,
    wins: 0,
    looses: 0,
    ante: 100,
  };

  while (INITIATOR < REPETITION || userStats.wallet < 300) {
    INITIATOR++;
    const getTenCards = getRandomCardsShuffledFromDeck(10);
    const userHand = getTenCards.slice(0, 5);
    const bankHand = getTenCards.slice(5, 10);
    const userHandResolved = resolveHand(userHand);
    const bankHandResolved = resolveHand(bankHand);
    const result = resolveGame(bankHandResolved, userHandResolved);
    const isBankWinner = result.winner === "Bank";
    const isBankQualified = result.isBankQualified;
    const BET = 200;
    const ANTE = 100;
    const NEW_WALLET = userStats.wallet - BET;
    const PAYOUT_IF_UNQUALIFIED = NEW_WALLET + ANTE * 2 + BET;
    const PAYOUT_IF_LOOSE = NEW_WALLET;
    const PAYOUT_IF_WINNER = NEW_WALLET + ANTE + BET + BET * result.payout;

    const PAYOUT = !isBankQualified
      ? PAYOUT_IF_UNQUALIFIED
      : isBankWinner
      ? PAYOUT_IF_LOOSE
      : PAYOUT_IF_WINNER;

    userStats = {
      ...userStats,
      hands: userStats.hands + 1,
      looses:
        result.winner === "Bank" ? userStats.looses + 1 : userStats.looses,
      wins: result.winner === "Player" ? userStats.wins + 1 : userStats.wins,
      wallet: PAYOUT,
    };
  }

  return userStats;
};
