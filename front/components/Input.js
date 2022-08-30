import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Fren, Sign, Location, GuestInput } from "components/Typography";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-right: 0.2rem;
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
