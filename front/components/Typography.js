import styled from "styled-components";
import { Blink } from "components/Animations";
import { orange, GreenCandle, RedCandle, white } from "styles/colors";

export const Text = styled.span`
  font-size: ${(props) => props.size || 0.8}rem;
  color: ${(props) => props.color || white};
  margin-bottom: 0.2rem;
`;

export const Fren = styled(Text)`
  color: ${GreenCandle};
`;
export const Location = styled(Text)`
  color: ${RedCandle};
`;
export const Sign = styled(Text)`
  color: ${orange};
`;

export const GuestInput = styled(Text).attrs({ as: "input" })`
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
