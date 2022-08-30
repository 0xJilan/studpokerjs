import styled from "styled-components";
import { Output } from "components/Output";

const HistoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem 0;
`;
export const History = ({ commandHistory }) => {
  return (
    <HistoryWrapper>
      {commandHistory.map((command, i) => (
        <Output host={command.host} command={command.message} key={i} />
      ))}
    </HistoryWrapper>
  );
};
