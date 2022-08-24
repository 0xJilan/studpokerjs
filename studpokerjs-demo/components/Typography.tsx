import styled from "styled-components";

const Title = styled.span`
  color: #e7ae23;
  font-family: Monoton-Regular;
`;
export const BigTitle = styled(Title)`
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1180) {
    font-size: 4.5rem;
  }
`;
export const Version = styled(Title)`
  font-size: 0.4rem;
  @media (min-width: 768px) {
    font-size: 0.6rem;
  }
  @media (min-width: 1180) {
    font-size: 0.8rem;
  }
`;
export const Text = styled.span`
  font-size: 0.6rem;
  font-family: Bungee-Regular;
`;
export const Regular = styled(Text)`
  color: #ccc9c8;
  margin-bottom: 0.6rem;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1180) {
    font-size: 1rem;
  }
`;
