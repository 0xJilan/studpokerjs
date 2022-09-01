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
  return (
    <CardOutputWrapper>
      <CardsWrapper>
        {cards.map((card, i) => {
          return <Card src={`cards/${card}.svg`} key={i} alt="poker-card" />;
        })}
      </CardsWrapper>
      {resolved && (
        <ResolverWrapper>
          <Text>{resolved.handRank}</Text>
        </ResolverWrapper>
      )}
    </CardOutputWrapper>
  );
};
