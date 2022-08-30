import "styles/globals.css";
import React, { createContext, useReducer } from "react";
import { DataReducer } from "lib/DataReducer";

export const UserData = createContext();
const initialData = {
  hands: 0,
  wallet: 0,
  wins: 0,
  looses: 0,
};

const MyApp = ({ Component, pageProps }) => {
  const [data, dispatch] = useReducer(DataReducer, initialData);

  return (
    <UserData.Provider value={{ data, dispatch }}>
      <Component {...pageProps} />
    </UserData.Provider>
  );
};
export default MyApp;
