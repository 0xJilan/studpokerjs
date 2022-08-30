import { useState, useContext, useEffect, useCallback } from "react";
import { UserData } from "pages/_app";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import { History } from "components/History";
import { Input } from "components/Input";

const Home = () => {
  const { data, dispatch } = useContext(UserData);
  const [mode, setMode] = useState("MENU");
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        console.log(command);
        switch (command) {
          case "FAUCET":
            console.log("faucet");
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
            console.log("clear");
            setCommand("");

            break;
          default:
            console.log("command not found!");
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
