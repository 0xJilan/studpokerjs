import styled from "styled-components";
import React from "react";
import { orange, green, red, purple, grey } from "styles/colors";
import { OUTPUTS_RULES, OUTPUTS_PAYOUTS, OUTPUTS_COMMANDS } from "lib/Outputs";

const HelperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  flex-direction: row;
  justify-content: space-around;
`;
const HelperWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items;center
`;

const RulesAndPayoutsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const OutputsText = styled.p`
  font-size: 0.6rem;
  color: ${(props) => props.color};
  margin: 0.2rem 0;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  color: ${(props) => props.color};
  font-size: 1rem;
`;

const MidHelperWrapper = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  flex-direction: column;
`;
type HelperComponentProps = {
  title: string;
  outputs: string[];
  color: string;
};
const HelperComponent: React.FC<HelperComponentProps> = ({
  title,
  outputs,
  color,
}) => {
  return (
    <RulesAndPayoutsWrapper>
      <Title color={color}>{title}</Title>

      <HelperWrapper>
        {outputs.map((item: string, key: number) => (
          <OutputsText color={color} key={key}>
            - {item}
          </OutputsText>
        ))}
      </HelperWrapper>
    </RulesAndPayoutsWrapper>
  );
};

type HelperProps = {
  mode: string;
};

export const Helper: React.FC<HelperProps> = ({ mode }) => {
  return (
    <HelperContainer>
      <HelperComponent color={green} title="RULES" outputs={OUTPUTS_RULES} />
      <MidHelperWrapper>
        <HelperComponent
          color={purple}
          title="AVAILAIBLE COMMANDS"
          outputs={OUTPUTS_COMMANDS[mode]}
        />
        <HelperComponent
          color={orange}
          title="AVAILAIBLE COMMANDS"
          outputs={OUTPUTS_COMMANDS[mode]}
        />
      </MidHelperWrapper>

      <HelperComponent color={red} title="PAYOUTS" outputs={OUTPUTS_PAYOUTS} />
    </HelperContainer>
  );
};
