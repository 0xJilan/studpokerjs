import { useState, useContext, useEffect, useCallback } from "react";
import { UserData } from "pages/_app";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import { History } from "components/History";
import { Input } from "components/Input";
import { Output } from "components/Input";

const Home = () => {
  const { data, dispatch } = useContext(UserData);
  const [mode, setMode] = useState("MENU");
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        switch (command) {
          case "FAUCET":
            dispatch({ type: "GET_FAUCET" });
            setCommandHistory((data) => [
              ...data,
              { host: false, message: command },
              { host: true, message: "Send 1000$!" },
            ]);
            setCommand("");
            break;
          case "PLAY":
            console.log("play");
            setCommand("");
            break;
          case "DEMO":
            console.log("demo");
            setCommand("");
            break;
          case "CLEAR":
            setCommandHistory([]);
            setCommand("");
            break;
          default:
            setCommandHistory((data) => [
              ...data,
              { host: false, message: command },
              { host: true, message: "command not found!" },
            ]);
            setCommand("");
        }
      }
    },
    [command]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [command]);

  const getFaucet = () => {
    dispatch({ type: "GET_FAUCET" });
  };

  return (
    <Layout>
      <Helper mode={mode} data={data} />
      <History commandHistory={commandHistory} />
      <Input command={command} setCommand={setCommand} />
      {/*
        <div onClick={() => getFaucet()}>GETFAUCET</div>
      */}
    </Layout>
  );
};
export default Home;
