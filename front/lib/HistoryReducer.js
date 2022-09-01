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
        {
          host: true,
          cards: action.user.hand,
          resolved: action.user.resolved,
          type: "user",
        },
        { host: true, cards: action.bank.hand, type: "bank" },
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
      const resolution = !action.isBankQualified
        ? {
            message: OUTPUTS_RESPONSES[action.command]?.unqualified,
            payout: 400,
          }
        : action.isBankWinner
        ? {
            message: OUTPUTS_RESPONSES[action.command]?.loose,
            payout: 0,
          }
        : {
            message: OUTPUTS_RESPONSES[action.command]?.win,
            payout: 100 + 200 * payout,
          };

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
          message: resolution.message,
        },
        {
          host: true,
          message: `Payout : ${resolution.payout}`,
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
