import { useState, useContext } from "react";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import React from "react";
import { UserData } from "pages/_app";
const Home = () => {
  const { data, dispatch } = useContext(UserData);
  const [mode, setMode] = useState("MENU");
  console.log("data:", data);

  const addToCart = () => {
    dispatch({ type: "GET_FAUCET" });
  };
  return (
    <Layout>
      <Helper mode={mode} data={data} />
      <div onClick={() => addToCart()}>GETFAUCET</div>
    </Layout>
  );
};
export default Home;
