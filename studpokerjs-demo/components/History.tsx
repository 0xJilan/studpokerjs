import React from "react";
import { InputDisplay } from "components/Input";

type HistoryProps = {
  commandHistory: string[];
};
export const History: React.FC<HistoryProps> = ({ commandHistory }) => {
  return (
    <div>
      {commandHistory.map((comand, i) => (
        <InputDisplay commandDisplay={comand} key={i} />
      ))}
    </div>
  );
};
