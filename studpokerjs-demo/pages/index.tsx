import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import { History } from "components/History";
import { Input } from "components/Input";
import { Output } from "components/Output";

const Home: NextPage = () => {
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState(["first"]);

  const keyDownHandler = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setCommandHistory((state) => [...state, command]);
      setCommand("");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [command]);

  return (
    <Layout>
      <Helper />
      <History commandHistory={commandHistory} />
      <Input setCommand={setCommand} command={command} />
    </Layout>
  );
};

export default Home;
