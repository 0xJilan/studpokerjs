import styled from "styled-components";

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 110px;
  width: 600px;
  justify-content: space-between;
  margin: 1rem 0;
`;
const Card = styled.img`
  height: 110px;
  width: 75px;
`;
export const CardsOutput = ({ cards }) => {
  return (
    <CardsWrapper>
      {cards.map((card, i) => {
        return <Card src={`cards/${card}.svg`} key={i} alt="poker-card" />;
      })}
    </CardsWrapper>
  );
};
