import { useState } from "react";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";

const Home = () => {
  const [mode, setMode] = useState("MENU");
  return (
    <Layout>
      <Helper mode={mode} />
    </Layout>
  );
};
export default Home;
