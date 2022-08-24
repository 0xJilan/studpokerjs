import type { NextPage } from "next";
import { Layout } from "components/Layout";
import { Input } from "components/Input";
import { Output } from "components/Output";
import { Helper } from "components/Helper";

const Home: NextPage = () => {
  return (
    <Layout>
      <Helper />

      <Input>Je Test</Input>
    </Layout>
  );
};

export default Home;
