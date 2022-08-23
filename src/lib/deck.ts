import { Deck } from "./utils";
//TODO: Check how Add doc for other thing that function (constante, interface, type, etc...)
const suits: string[] = ["H", "C", "D", "S"];
const values: number[] = [...Array(13)].map((_, index) => index + 2); //2 to 14

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

export const splitBySuitsAndValues = (deck: string[]): Deck => {
  return {
    suits: deck.map((card) => card.split("-")[1]),
    values: deck.map((card) => Number(card.split("-")[0])),
  };
};
