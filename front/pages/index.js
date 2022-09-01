import { useState, useContext, useEffect, useCallback } from "react";
import { UserStats, UserHistory, UserParty } from "pages/_app";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import { History } from "components/History";
import { Input } from "components/Input";
import { isAvailableCommand } from "lib/Checker";
import {
  getRandomCardsShuffledFromDeck,
  getReadableCards,
  resolveHand,
} from "studpokerjs";

const Home = () => {
  const { stats, dispatchStats } = useContext(UserStats);
  const { history, dispatchHistory } = useContext(UserHistory);
  const { party, dispatchParty } = useContext(UserParty);
  const [mode, setMode] = useState("MENU");
  const [command, setCommand] = useState("");

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        if (isAvailableCommand(mode, command)) {
          switch (command) {
            case "FAUCET":
              stats.wallet < 1000 && dispatchStats({ type: "GET_FAUCET" });
              dispatchHistory({
                type: "GET_FAUCET",
                command,
                error: stats.wallet >= 1000,
              });
              setCommand("");
              break;
            case "PLAY":
              stats.wallet >= 300 && setMode("PLAY");
              dispatchHistory({
                type: "PLAY",
                command,
                error: stats.wallet < 300,
              });
              setCommand("");
              break;
            case "DEAL":
              setMode("DEAL");
              const getSixCards = getRandomCardsShuffledFromDeck(6);
              const userHand = getSixCards.slice(0, 5);
              const bankHand = getSixCards.slice(5, 6);
              dispatchStats({ type: "DEAL" });
              dispatchParty({ type: command, userHand, bankHand });
              console.log("userHand:", userHand);
              console.log("bankHand:", bankHand);
              dispatchHistory({
                type: command,
                command,
                user: {
                  hand: getReadableCards(userHand),
                  resolved: resolveHand(userHand),
                },
                bank: {
                  hand: getReadableCards(bankHand),
                },
              });
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
    [command, mode, party]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [command, mode, party]);

  return (
    <Layout>
      <Helper mode={mode} data={stats} />
      <History commandHistory={history} />
      <Input command={command} setCommand={setCommand} />
    </Layout>
  );
};
export default Home;
