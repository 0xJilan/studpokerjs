import styled from "styled-components";

const Text = styled.span`
  color: #e7ae23;
  font-family: Monoton-Regular;
`;
export const BigTitle = styled(Text)`
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1180) {
    font-size: 4.5rem;
  }
`;
export const Version = styled(Text)`
  font-size: 0.4rem;
  @media (min-width: 768px) {
    font-size: 0.6rem;
  }
  @media (min-width: 1180) {
    font-size: 0.8rem;
  }
`;
