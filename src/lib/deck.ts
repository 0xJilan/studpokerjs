const suitsOfCards: string[] = ["H", "C", "D", "S"];
const ranksOfCards: string[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
export const createDeckOfCards = (): string[] => {
  let newDeck: string[] = [];
  suitsOfCards.map((suit) =>
    ranksOfCards.map((rank) => newDeck.push(rank + suit))
  );
  return newDeck;
};
export const shuffleDeck = (deck: string[]): string[] => {
  return [...deck].sort(() => 0.5 - Math.random());
};
