import styled from "styled-components";
import { Text, Regular } from "components/Typography";

const Guest = styled(Text)`
  color: #e25b69;
`;
const Location = styled(Text)`
  color: #a37db8;
`;
const Sign = styled(Text)`
  color: #e7ae23;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-right: 0.2rem;
`;

type InputProps = {
  children: string;
};

export const Input: React.FC<InputProps> = ({ children }) => {
  return (
    <InputWrapper>
      <Guest>guest</Guest>
      <Sign>@</Sign>
      <Location>localhost</Location>
      <Sign>:$ ~ </Sign>
      <Regular>Test</Regular>
    </InputWrapper>
  );
};
