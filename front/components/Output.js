import styled from "styled-components";
import { Text, Fren, Sign, Location } from "components/Typography";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 0.2rem 0.2rem 0.2rem 0;
`;

export const Output = ({ host, command }) => {
  return !host ? (
    <InputWrapper>
      <Fren>fren</Fren>
      <Sign>@</Sign>
      <Location>localhost</Location>
      <Sign>:$ ~ </Sign>
      <Text>{command}</Text>
    </InputWrapper>
  ) : (
    <Text>{command}</Text>
  );
};
