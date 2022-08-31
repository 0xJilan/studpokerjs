import { useState, useContext, useEffect, useCallback } from "react";
import { UserStats, UserHistory } from "pages/_app";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import { History } from "components/History";
import { Input } from "components/Input";
import { isAvailableCommand } from "lib/Checker";
import { getRandomCardsShuffledFromDeck } from "studpokerjs";
import { OUTPUTS_ERRORS } from "utils/outputs";

const Home = () => {
  const { stats, dispatchStats } = useContext(UserStats);
  const { history, dispatchHistory } = useContext(UserHistory);
  const [mode, setMode] = useState("MENU");
  const [command, setCommand] = useState("");

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        if (isAvailableCommand(mode, command)) {
          switch (command) {
            case "FAUCET":
              const error = stats.wallet >= 1000;
              !error && dispatchStats({ type: "GET_FAUCET" });
              dispatchHistory({ type: "GET_FAUCET", command, error });
              setCommand("");
              break;
            case "PLAY":
              setMode("PLAY");
              dispatchHistory({ type: "PLAY", command });
              setCommand("");
              break;
            case "DEAL":
              setMode("DEAL");
              //TODO: give 6 cards for the start game
              //TODO: explain Bet or fold like on play
              //TODO: dispatch stats and history
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
        } else {
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
    </Layout>
  );
};
export default Home;
