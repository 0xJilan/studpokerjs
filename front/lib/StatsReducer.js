export const StatsReducer = (stats, action) => {
  switch (action.type) {
    case "GET_FAUCET":
      return {
        ...stats,
        wallet: stats.wallet + 1000,
      };

    default:
      return stats;
  }
};
