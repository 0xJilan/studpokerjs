import styled from "styled-components";

const HistoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: colum;
`;
export const History = ({ commandHistory }) => {
  return (
    <HistoryWrapper>
      {commandHistory.map((command, i) => (
        <React.Fragment key={i}>{command}</React.Fragment>
      ))}
    </HistoryWrapper>
  );
};
