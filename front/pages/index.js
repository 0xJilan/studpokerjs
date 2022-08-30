import { useState, useContext } from "react";
import { UserData } from "pages/_app";
import { Layout } from "components/Layout";
import { Helper } from "components/Helper";
import { History } from "components/History";
import { Input } from "components/Input";

const Home = () => {
  const { data, dispatch } = useContext(UserData);
  const [mode, setMode] = useState("MENU");
  const [command, setCommand] = useState(null);
  const [commandHistory, setCommandHistory] = useState([]);

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
