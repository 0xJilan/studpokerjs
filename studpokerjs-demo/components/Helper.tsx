import styled from "styled-components";
import React from "react";
import { Regular } from "components/Typography";

const HelperContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100%;
  margin: 0.5rem;
  @media (min-width: 768px) {
    height: 12%;
    width: 70%;
  }
`;
const HelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 70%;
  margin: 0;
`;

export const Helper: React.FC = () => {
  return (
    <HelperContainer>
      <Regular>Available commands:</Regular>
      <HelperWrapper>
        <Regular>- rules</Regular>
        <Regular>- play</Regular>
        <Regular>- simulation</Regular>
        <Regular>- docs</Regular>
        <Regular>- npm</Regular>
        <Regular>- twitter</Regular>
        <Regular>- github</Regular>
      </HelperWrapper>
    </HelperContainer>
  );
};
