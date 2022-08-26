import React from "react";
import { InputDisplay } from "components/Input";
import { Output } from "components/Output";
import { v4 as uuidv4 } from "uuid";

type HistoryProps = {
  commandHistory: string[];
  outputHistory: string[];
};
export const History: React.FC<HistoryProps> = ({
  commandHistory,
  outputHistory,
}) => {
  return (
    <div>
      {commandHistory.map((command, i) => (
        <>
          <InputDisplay commandDisplay={command} key={uuidv4()} />
          <Output children={outputHistory[i]} key={uuidv4()} />
        </>
      ))}
    </div>
  );
};
