import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { Layout } from "components/Layout";
import { Input } from "components/Input";
import { Output } from "components/Output";
import { Helper } from "components/Helper";

const Home: NextPage = () => {
  const [command, setCommand] = useState("");

  console.log("render App");

  return (
    <Layout>
      <Helper />
      <Input setCommand={setCommand} command={command} />
    </Layout>
  );
};

export default Home;
