import styled from "styled-components";
import { Text } from "./Typography";

const CardOutputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  justify-content: space-between;
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 70%;
  justify-content: space-between;
  margin: 1rem 0;
`;
const Card = styled.img`
  height: 110px;
  width: 75px;
`;
const ResolverWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CardsOutput = ({ cards, resolved }) => {
  const SUBJECT = resolved ? "YOUR HAND" : "BANK HAND";
  console.log("cards:", cards);
  const SUBJECT_CARDS =
    cards.length > 1 ? cards : ["X", "X", "X", "X", cards[0]];

  console.log("SUBJECTCARD:", SUBJECT_CARDS);

  return (
    <CardOutputWrapper>
      <CardsWrapper>
        {SUBJECT_CARDS.map((card, i) => {
          return <Card src={`cards/${card}.svg`} key={i} alt="poker-card" />;
        })}
      </CardsWrapper>
      <ResolverWrapper>
        <Text>
          {SUBJECT}: {resolved?.handRank}
        </Text>
      </ResolverWrapper>
    </CardOutputWrapper>
  );
};
