import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Blink } from "components/Animations";
import { orange, green, white, purple } from "styles/colors";

const Text = styled.span`
  font-size: 0.8rem;
  color: ${white};
  @media (min-width: 1180) {
    font-size: 1rem;
  }
`;
const Fren = styled(Text)`
  color: ${green};
`;
const Location = styled(Text)`
  color: ${purple};
`;
const Sign = styled(Text)`
  color: ${orange};
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-right: 0.2rem;
`;

const GuestInput = styled(Text).attrs({ as: "input" })`
  border: none;
  font-family: "Bungee-Regular";
  background-color: transparent;
  resize: none;
  outline: none;
  border-left: 2px solid transparent;
  animation: ${Blink} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards infinite;
  &:focus {
    animation: none;
  }
`;

export const Input = ({ setCommand, command }) => {
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <InputWrapper>
      <Fren>fren</Fren>
      <Sign>@</Sign>
      <Location>localhost</Location>
      <Sign>:$ ~ </Sign>
      <GuestInput
        type="text"
        autoComplete="off"
        autoFocus
        ref={inputElement}
        value={command}
        name="command"
        onChange={(e) => setCommand(String(e.target.value).toUpperCase())}
      />
    </InputWrapper>
  );
};
