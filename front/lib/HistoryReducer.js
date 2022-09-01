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
      console.log("user cards in dispatch history :", action.userHand);
      return [
        ...history,
        { host: false, message: action.command },
        { host: true, message: "YOUR CARDS:" },
        { host: true, cards: action.userHand },
        { host: true, message: "BANK CARD:" },
        { host: true, cards: action.bankHand },
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
