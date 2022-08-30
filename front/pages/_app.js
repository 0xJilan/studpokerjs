import "styles/globals.css";
import React, { createContext, useReducer } from "react";
import { StatsReducer } from "lib/StatsReducer";
import { HistoryReducer } from "lib/HistoryReducer";

export const UserStats = createContext();
export const UserHistory = createContext();

const Stats = {
  hands: 0,
  wallet: 0,
  wins: 0,
  looses: 0,
  Ante: 100,
};
const History = [{ host: true, message: "Welcome Fren!" }];

const MyApp = ({ Component, pageProps }) => {
  const [stats, dispatchStats] = useReducer(StatsReducer, Stats);
  const [history, dispatchHistory] = useReducer(HistoryReducer, History);

  return (
    <UserStats.Provider value={{ stats, dispatchStats }}>
      <UserHistory.Provider value={{ history, dispatchHistory }}>
        <Component {...pageProps} />
      </UserHistory.Provider>
    </UserStats.Provider>
  );
};
export default MyApp;
