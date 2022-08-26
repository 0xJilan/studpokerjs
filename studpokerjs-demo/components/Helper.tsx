import styled from "styled-components";
import React, { useMemo } from "react";
import { Output } from "components/Output";

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
  console.log("render Helper");

  return (
    <HelperContainer>
      <Output>Available commands:</Output>
      <HelperWrapper>
        <Output>- rules</Output>
        <Output>- play</Output>
        <Output>- simulation</Output>
        <Output>- docs</Output>
        <Output>- npm</Output>
        <Output>- twitter</Output>
        <Output>- github</Output>
      </HelperWrapper>
    </HelperContainer>
  );
};
