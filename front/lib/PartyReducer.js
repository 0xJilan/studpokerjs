export const PartyReducer = (party, action) => {
  switch (action.type) {
    case "DEAL":
      return {
        ...party,
        userHand: action.DEAL.userHand,
        userHandDisplay: action.DEAL.userHandDisplay,
        userResolution: action.DEAL.userResolution,
        bankHand: action.DEAL.bankHand,
        bankHandDisplay: action.DEAL.bankHandDisplay,
        bankResolution: action.DEAL.bankResolution,
        status: action.DEAL.status,
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
