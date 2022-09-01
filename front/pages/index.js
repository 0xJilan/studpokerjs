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
              stats.wallet < 1000 && dispatchStats({ type: command });
              dispatchHistory({
                type: command,
                command,
                error: stats.wallet >= 1000,
              });
              setCommand("");
              break;
            case "PLAY":
              stats.wallet >= 300 && setMode("PLAY");
              dispatchHistory({
                type: command,
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
              dispatchStats({ type: command });
              dispatchParty({ type: command, userHand, bankHand });
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
              setCommand("");
              break;
            case "FOLD":
              dispatchStats({ type: command });
              dispatchParty({ type: command });
              dispatchHistory({
                type: command,
                command,
              });
              setMode("PLAY");
              setCommand("");
              break;
            case "BET":
              console.log("BET");
              // Get 4 Cards for the bank
              // resolve hand of the bank
              //compare two hands
              // display bank hand resolved
              // display result
              setCommand("");
              break;
            case "EXIT":
              setMode("MENU");
              setCommand("");
              break;
            case "DEMO":
              console.log("DEMO");
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
