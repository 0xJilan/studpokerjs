import "styles/globals.css";
import React, { createContext, useReducer } from "react";
import { StatsReducer } from "lib/StatsReducer";
import { HistoryReducer } from "lib/HistoryReducer";
import { PartyReducer } from "lib/PartyReducer";

export const UserStats = createContext();
export const UserHistory = createContext();
export const UserParty = createContext();

const Stats = {
  hands: 0,
  wallet: 0,
  wins: 0,
  looses: 0,
  ante: 100,
};
const History = [{ host: true, message: "Welcome Fren!" }];

const Party = {
  userHand: [],
  userHandDisplay: [],
  userResolution: "",
  bankHand: [],
  bankHandDisplay: [],
  bankResolution: "",
  status: "WAITING FOR PLAY...",
};

const MyApp = ({ Component, pageProps }) => {
  const [stats, dispatchStats] = useReducer(StatsReducer, Stats);
  const [history, dispatchHistory] = useReducer(HistoryReducer, History);
  const [party, dispatchParty] = useReducer(PartyReducer, Party);

  return (
    <UserStats.Provider value={{ stats, dispatchStats }}>
      <UserHistory.Provider value={{ history, dispatchHistory }}>
        <UserParty.Provider value={{ party, dispatchParty }}>
          <Component {...pageProps} />
        </UserParty.Provider>
      </UserHistory.Provider>
    </UserStats.Provider>
  );
};
export default MyApp;
