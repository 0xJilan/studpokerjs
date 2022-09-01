export const PartyReducer = (party, action) => {
  switch (action.type) {
    case "DEAL":
      return {
        ...party,
        userHand: action.userHand,
        bankHand: action.bankHand,
      };
    case "FOLD":
      return {
        ...party,
        userHand: [],
        bankHand: [],
      };
    case "BET":
      return {
        ...party,
        bankHand: action.bankHand,
      };
    default:
      return party;
  }
};
