export const StatsReducer = (stats, action) => {
  switch (action.type) {
    case "GET_FAUCET":
      return {
        ...stats,
        wallet: stats.wallet + 1000,
      };
    case "DEAL":
      return {
        ...stats,
        wallet: stats.wallet - 100,
        hands: stats.hands + 1,
      };

    default:
      return stats;
  }
};
