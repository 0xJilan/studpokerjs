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
    default:
      return party;
  }
};
