import styled from "styled-components";
import { Output } from "components/Output";

const HistoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem 0;
  overflow-y: auto;
`;

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
  width: 90px;
`;

//TODO: History must be auto scrolled down when many elements inside
export const History = ({ commandHistory }) => {
  return (
    <HistoryWrapper>
      {commandHistory.map((command, i) =>
        command.cards ? (
          <CardsWrapper>
            {command.cards.map((card, i) => {
              return (
                <Card src={`cards/${card}.svg`} key={i} alt="poker-card" />
              );
            })}
          </CardsWrapper>
        ) : (
          <Output host={command.host} command={command.message} key={i} />
        )
      )}
    </HistoryWrapper>
  );
};
