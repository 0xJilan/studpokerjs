import styled from "styled-components";
import { Text } from "components/Typography";
import { RedCandle } from "styles/colors";
import { OUTPUTS_COMMANDS } from "utils/outputs";

const CommandsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;
const CommandsContainer = styled.div`
display: flex;
flex-direction row;
justify-content: space-between;
flex-wrap: wrap;
`;

const CommandsList = ({ mode }) => {
  return (
    <CommandsListWrapper>
      <Text color={RedCandle} size={1}>
        AVAILAIBLE COMMANDS:
      </Text>
      <CommandsContainer>
        {OUTPUTS_COMMANDS[mode].map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </CommandsContainer>
    </CommandsListWrapper>
  );
};

export default CommandsList;
