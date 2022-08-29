import { useState, useContext } from "react";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import React from "react";
import { UserData } from "pages/_app";
const Home = () => {
  const { state, dispatch } = useContext(UserData);
  const [mode, setMode] = useState("MENU");
  console.log("state:", state);

  return (
    <Layout>
      <Helper mode={mode} data={state.data} />
    </Layout>
  );
};
export default Home;
