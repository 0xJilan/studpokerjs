import styled from "styled-components";
import { useEffect, useRef } from "react";
import { Text } from "components/Typography";
import { Blink } from "components/Animations";

const Guest = styled(Text)`
  color: #00ec00;
`;
const Location = styled(Text)`
  color: #e25b69;
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
const CommandInput = styled.input`
  font-size: 0.6rem;
  margin-left: 0.5rem;
  color: #ccc9c8;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1180) {
    font-size: 1rem;
  }
`;
const HistoryInput = styled(CommandInput).attrs({ as: "span" })``;
const GuestInput = styled(CommandInput).attrs({ as: "input" })`
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  border-left: 1px solid transparent;
  animation: ${Blink} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards infinite;
  &:focus {
    animation: none;
  }
`;
type InputProps = {
  setCommand: (text: string) => void;
  command: string;
};

const Input: React.FC<InputProps> = ({ setCommand, command }) => {
  const inputElement = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <InputWrapper>
      <Guest>fren</Guest>
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCommand(String(e.target.value).toUpperCase())
        }
      />
    </InputWrapper>
  );
};

type InputDisplayProps = {
  commandDisplay: string;
};
const InputDisplay: React.FC<InputDisplayProps> = ({ commandDisplay }) => {
  return (
    <InputWrapper>
      <Guest>guest</Guest>
      <Sign>@</Sign>
      <Location>localhost</Location>
      <Sign>:$ ~ </Sign>
      <HistoryInput>{commandDisplay}</HistoryInput>
    </InputWrapper>
  );
};

export { Input, InputDisplay };
