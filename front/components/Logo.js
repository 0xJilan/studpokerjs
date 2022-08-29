import styled from "styled-components";
import Image from "next/image";
import LogoCards from "public/logo.png";
import PackageJSON from "package.json";

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  height: 15%;
  justify-content: center;
  align-items: center;
`;
const ElementWrapper = styled.div`
  display: flex;
  height: 3rem;
  width: 2.5rem;
`;
const ImgWrapper = styled(ElementWrapper)`
  margin: 0 1rem;
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
      <ImgWrapper>
        <Image
          src={LogoCards}
          height="100%"
          width="100%"
          style={{ boxShadow: "5px 5px 15px 5px #000000" }}
        />
      </ImgWrapper>
      <BigTitle>STUDPOKER.JS</BigTitle>
      <VersionWrapper>
        <Version>v {PackageJSON.version}</Version>
      </VersionWrapper>
    </LogoWrapper>
  );
};
