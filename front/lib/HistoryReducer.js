export const HistoryReducer = (history, action) => {
  switch (action.type) {
    case "GET_FAUCET":
      return [
        ...history,
        { host: false, message: action.command },
        { host: true, message: "Send 1000$!" },
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
