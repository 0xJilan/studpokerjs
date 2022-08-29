import "../styles/globals.css";
import React, { createContext, useReducer } from "react";

export const UserData = createContext();

const initailState = {
  data: [
    {
      hands: 0,
      wallet: 0,
      wins: 0,
      looses: 0,
    },
  ],
};
const MyApp = ({ Component, pageProps }) => {
  const Reducers = () => {};
  const [state, dispatch] = useReducer(Reducers, initailState);

  return (
    <UserData.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </UserData.Provider>
  );
};
export default MyApp;
