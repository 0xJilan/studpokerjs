import styled from "styled-components";
import Head from "next/head";
import PackageJSON from "../package.json";
import { BigTitle, Version } from "components/Typography";

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2c2c34;
  padding: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 1180px) {
    font-size: 1.5rem;
  }
`;
const Main = styled.main`
  padding: 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.2rem solid #e7ae23;
  border-radius: 0.5rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Head>
        <title>StudPoker.js</title>
        <meta name="StudPoker.js" content="Demo of studpokerjs library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <LogoWrapper>
          <BigTitle>STUDPOKER.JS</BigTitle>
          <Version>v {PackageJSON.version}</Version>
        </LogoWrapper>
        {children}
      </Main>
    </LayoutWrapper>
  );
};
