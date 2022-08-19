const suits: string[] = ["H", "C", "D", "S"];
const values: number[] = [...Array(13)].map((_, index) => index + 1);

export const createDeckFromCards = (): string[] => {
  let newDeck: string[] = [];
  suits.map((suit) => values.map((value) => newDeck.push(value + "-" + suit)));
  return newDeck;
};

export const shuffleDeck = (deck: string[]): string[] => {
  return [...deck].sort(() => 0.5 - Math.random());
};

export const distributeDeck = (
  shuffledDeck: string[],
  numberOfPlayer: number = 2
): string[][] => {
  const cardsByPlayer: number = 5;
  return [...Array(numberOfPlayer)].map((_, i) =>
    shuffledDeck.slice(i * cardsByPlayer, i * cardsByPlayer + cardsByPlayer)
  );
};

export const sortBySuitsAndValues = (deck: string[]): any[][] => {
  return [
    deck.map((card) => card.split("-")[1]).sort(),
    deck.map((card) => Number(card.split("-")[0])).sort((a, b) => a - b),
  ];
};
