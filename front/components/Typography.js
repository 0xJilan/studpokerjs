import styled from "styled-components";
import { Blink } from "components/Animations";
import { orange, green, white, purple } from "styles/colors";

export const Text = styled.span`
  font-size: 0.8rem;
  color: ${white};
  @media (min-width: 1180) {
    font-size: 1rem;
  }
`;
export const Fren = styled(Text)`
  color: ${green};
`;
export const Location = styled(Text)`
  color: ${purple};
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
