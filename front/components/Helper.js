import styled from "styled-components";
import { orange, green, red, purple } from "styles/colors";
import {
  OUTPUTS_RULES,
  OUTPUTS_PAYOUTS,
  OUTPUTS_COMMANDS,
} from "utils/outputs";

const HelperSection = styled.section`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DoubleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
`;
const HelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  height: ${(props) => props.height}%;
  width: ${(props) => props.width}%;
`;

const HelperTitle = styled.h2`
  font-size: 1rem;
  text-align: center;
`;
const OutputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const OutputTitle = styled.span`
  font-size: 0.7rem;
  margin-bottom: 0.2rem;
`;

const HelperComponent = ({ title, height, width, outputs, color }) => {
  return (
    <HelperWrapper color={color} height={height} width={width}>
      <HelperTitle>{title}</HelperTitle>
      <OutputWrapper>
        {outputs.map((item, key) => (
          <OutputTitle color={color} key={key}>
            - {item}
          </OutputTitle>
        ))}
      </OutputWrapper>
    </HelperWrapper>
  );
};

export const Helper = ({ mode }) => {
  return (
    <HelperSection>
      <HelperComponent
        title="RULES"
        height="100"
        width="30"
        color={green}
        outputs={OUTPUTS_RULES}
      />
      <DoubleBox>
        <HelperComponent
          title="AVAILAIBLE COMMANDS"
          height="50"
          width="100"
          color={purple}
          outputs={OUTPUTS_COMMANDS[mode]}
        />
        <HelperComponent
          title="AVAILAIBLE COMMANDS"
          height="50"
          width="100"
          color={orange}
          outputs={OUTPUTS_COMMANDS[mode]}
        />
      </DoubleBox>
      <HelperComponent
        title="PAYOUTS"
        width="30"
        height="100"
        color={red}
        outputs={OUTPUTS_PAYOUTS}
      />
    </HelperSection>
  );
};
