import styled from "styled-components";
import PackageJSON from "package.json";
import { orange } from "styles/colors";

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: ${orange};
  height: 15%;
  justify-content: center;
  align-items: center;
`;
const ElementWrapper = styled.div`
  display: flex;
  height: 3rem;
  width: 2.5rem;
`;
const VersionWrapper = styled(ElementWrapper)`
  margin: 0 1rem;
  align-items: end;
`;
const BigTitle = styled.span`
  font-family: Monoton-Regular;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1180) {
    font-size: 4.5rem;
  }
`;
const Version = styled.p`
  font-family: Monoton-Regular;
  font-size: 0.4rem;
  margin-bottom: 0.2rem;
  @media (min-width: 768px) {
    font-size: 0.6rem;
  }
  @media (min-width: 1180) {
    font-size: 0.8rem;
  }
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <BigTitle>STUDPOKER.JS</BigTitle>
      <VersionWrapper>
        <Version>v {PackageJSON.version}</Version>
      </VersionWrapper>
    </LogoWrapper>
  );
};
