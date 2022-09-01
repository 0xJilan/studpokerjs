import { OUTPUTS_RESPONSES } from "utils/outputs";

export const HistoryReducer = (history, action) => {
  const message =
    action.error === true
      ? OUTPUTS_RESPONSES[action.command]?.error
      : OUTPUTS_RESPONSES[action.command]?.succes;

  switch (action.type) {
    case "FAUCET":
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
      return [
        ...history,
        { host: false, message: action.command },

        !action.error && {
          host: true,
          cards: action.user.hand,
          resolved: action.user.resolved,
          type: "user",
        },
        !action.error && { host: true, cards: action.bank.hand, type: "bank" },
        {
          host: true,
          message,
        },
      ];
    case "FOLD":
      return [
        ...history,
        { host: false, message: action.command },
        { host: true, message },
        {
          host: true,
          message: "ENTER 'DEAL' TO RECEIVE CARDS - COST: 100$",
        },
      ];
    case "BET":
      const payout = action.payout;
      const resolveMessage = action.resolveMessage;
      return [
        ...history,
        { host: false, message: action.command },
        {
          host: true,
          cards: action.user.hand,
          resolved: action.user.resolved,
          type: "user",
        },
        {
          host: true,
          cards: action.bank.hand,
          resolved: action.bank.resolved,
          type: "bank",
        },
        {
          host: true,
          message: resolveMessage,
        },
        {
          host: true,
          message: `Payout : ${payout}`,
        },
        {
          host: true,
          message: "ENTER 'DEAL' TO RECEIVE CARDS - COST: 100$",
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
