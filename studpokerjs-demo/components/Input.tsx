import styled from "styled-components";
import { useEffect, useRef } from "react";
import { Text, Regular } from "components/Typography";
import { Blink } from "components/Animations";

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
  margin-bottom: 0.4rem;
`;
const GuestInput = styled.input`
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  font-size: 0.6rem;
  margin-left: 0.5rem;
  color: #ccc9c8;
  font-family: Bungee-Regular;
  border-left: 1px solid transparent;
  animation: ${Blink} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards infinite;
  &:focus {
    animation: none;
  }
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1180) {
    font-size: 1rem;
  }
`;
type InputProps = {
  setCommand: (text: string) => void;
  command: string;
};

export const Input: React.FC<InputProps> = ({ setCommand, command }) => {
  const inputElement = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
    const keyDownHandler = (e: any) => {
      if (e.key === "Enter") {
        e.preventDefault();
        console.log("pressed Enter ✅");
        setCommand("");
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  console.log("render Input");

  return (
    <InputWrapper>
      <Guest>guest</Guest>
      <Sign>@</Sign>
      <Location>localhost</Location>
      <Sign>:$ ~ </Sign>
      <GuestInput
        type="text"
        required
        ref={inputElement}
        autoComplete="off"
        value={command}
        name="command"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCommand(e.target.value)
        }
      />
    </InputWrapper>
  );
};
