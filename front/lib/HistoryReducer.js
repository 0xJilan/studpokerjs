import { OUTPUTS_RESPONSES } from "utils/outputs";

export const HistoryReducer = (history, action) => {
  const message =
    action.error === true
      ? OUTPUTS_RESPONSES[action.command]?.error
      : OUTPUTS_RESPONSES[action.command]?.succes;

  switch (action.type) {
    case "GET_FAUCET":
      return [
        ...history,
        { host: false, message: action.command },
        {
          host: true,
          message,
        },
      ];
    case "CLEAR":
      return [];
    case "PLAY":
      return [
        ...history,
        { host: false, message: action.command },
        { host: true, message },
      ];

    case "DEAL":
      console.log("bank cards in dispatch history :", action.bankHand);
      const { command, user, bank } = action;
      return [
        ...history,
        { host: false, message: command },
        { host: true, cards: user.hand, resolved: user.resolved },
        { host: true, cards: bank.hand },
        {
          host: true,
          message:
            "IF YOU THINK YOUR HAND WILL WIN ?  ENTER 'BET' TO CONTINUE (COST: 2 ANTE) OR 'FOLD' AND LOSE YOUR ANTE",
        },
      ];

    case "NOT_FOUND":
      return [
        ...history,
        { host: false, message: action.command },
        { host: true, message: "command not found!" },
      ];
    default:
      return history;
  }
};
