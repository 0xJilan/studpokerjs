import styled from "styled-components";
import { orange, GradientDark, DarkBlue } from "styles/colors";
import Head from "next/head";
import { Logo } from "components/Logo";

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${DarkBlue};
  padding: 0.5rem;
`;
const Main = styled.main`
  padding: 0.2rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.2rem solid ${orange};
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    padding: 0.6rem;
  }
  @media (min-width: 1180px) {
    padding: 1rem;
  }
`;
const Section = styled.section`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Head>
        <title>StudPoker.js</title>
        <meta name="StudPoker.js" content="Demo of studpokerjs library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Logo />
        <Section>{children}</Section>
      </Main>
    </LayoutWrapper>
  );
};
