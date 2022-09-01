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
        { host: true, message: "YOUR CARDS:" },
        { host: true, cards: user.hand },
        { host: true, message: "BANK CARD:" },
        { host: true, cards: ["BACK", "BACK", "BACK", "BACK", bank.hand[0]] },
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
