import { useState, useContext, useEffect, useCallback } from "react";
import { UserStats, UserHistory } from "pages/_app";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import { History } from "components/History";
import { Input } from "components/Input";

const Home = () => {
  const { stats, dispatchStats } = useContext(UserStats);
  const { history, dispatchHistory } = useContext(UserHistory);
  const [mode, setMode] = useState("MENU");
  const [command, setCommand] = useState("");

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        switch (command) {
          case "FAUCET":
            dispatchStats({ type: "GET_FAUCET" });
            dispatchHistory({ type: "GET_FAUCET", command });
            setCommand("");
            break;
          case "PLAY":
            setMode("PLAY");
            //TODO: FIX WHY PLAY DONT DISPATCH HISTORY
            dispatchHistory({ type: "PLAY", command });
            setCommand("");
            break;
          case "DEAL":
            setMode("DEAL");
            setCommand("");
            break;
          case "EXIT":
            setMode("MENU");
            setCommand("");
            break;
          case "FOLD":
            setMode("PLAY");
            setCommand("");
            break;
          case "DEMO":
            console.log("demo");
            setCommand("");
            break;
          case "CLEAR":
            dispatchHistory({ type: "CLEAR" });
            setCommand("");
            break;
          default:
            dispatchHistory({ type: "NOT_FOUND", command });
            setCommand("");
        }
      }
    },
    [command, mode]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [command, mode]);

  return (
    <Layout>
      <Helper mode={mode} data={stats} />
      <History commandHistory={history} />
      <Input command={command} setCommand={setCommand} />
      {/*
        <div onClick={() => getFaucet()}>GETFAUCET</div>
      */}
    </Layout>
  );
};
export default Home;
