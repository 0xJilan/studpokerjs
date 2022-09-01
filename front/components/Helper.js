import styled from "styled-components";
import {
  orange,
  green,
  red,
  purple,
  GreenCandle,
  RedCandle,
} from "styles/colors";
import { OUTPUTS_PAYOUTS, OUTPUTS_COMMANDS } from "utils/outputs";
import { formatData } from "lib/formatData";

const HelperSection = styled.section`
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: center;
`;

const HelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.color};
  width: 100%;
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

const HelperComponent = ({ title, height, width, outputs, color, type }) => {
  return (
    <HelperWrapper color={color}>
      <HelperTitle>{title}</HelperTitle>
      <OutputWrapper>
        {outputs.map((item, key) => (
          <OutputTitle color={color} key={key}>
            - {type === "datas" ? item[0] + " : " + item[1] : item}
          </OutputTitle>
        ))}
      </OutputWrapper>
    </HelperWrapper>
  );
};

export const Helper = ({ mode, data }) => {
  return (
    <HelperSection>
      <HelperComponent
        title="AVAILAIBLE COMMANDS"
        height="50"
        width="100"
        color={purple}
        outputs={OUTPUTS_COMMANDS[mode]}
      />
      <HelperComponent
        title="STATS"
        height="50"
        width="100"
        color={orange}
        type="datas"
        outputs={formatData(data)}
      />
      <HelperComponent
        title="PAYOUTS"
        width="30"
        height="100"
        color={RedCandle}
        outputs={OUTPUTS_PAYOUTS}
      />
    </HelperSection>
  );
};
