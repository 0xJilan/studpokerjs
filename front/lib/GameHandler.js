import {
  getRandomCardsShuffledFromDeck,
  getReadableCards,
  resolveHand,
  resolveGame,
} from "studpokerjs";

export const getDeal = () => {
  const getSixCards = getRandomCardsShuffledFromDeck(6);
  const userHand = getSixCards.slice(0, 5);
  const bankHand = getSixCards.slice(5, 6);

  return {
    userHand,
    userHandDisplay: getReadableCards(userHand),
    userResolution: resolveHand(userHand),
    bankHand,
    bankHandDisplay: ["X", "X", "X", "X", getReadableCards(bankHand)[0]],
    bankResolution: "",
    status: "WAITING FOR BET...",
  };
};
