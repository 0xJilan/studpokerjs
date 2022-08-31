import { OUTPUTS_ERRORS } from "utils/outputs";

export const HistoryReducer = (history, action) => {
  switch (action.type) {
    case "GET_FAUCET":
      const message =
        action.error === true
          ? OUTPUTS_ERRORS[action.command].funded
          : "Send 1000$!";
      return [
        ...history,
        { host: false, message: action.command },
        {
          host: true,
          message: message,
        },
      ];

    case "CLEAR":
      return [];
    case "PLAY":
      return [
        ...history,
        { host: false, message: action.command },
        { host: true, message: "Enter 'DEAL' to receive cards!" },
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
