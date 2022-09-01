export const StatsReducer = (stats, action) => {
  switch (action.type) {
    case "FAUCET":
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
    case "FOLD":
      return {
        ...stats,
        looses: stats.looses + 1,
      };
    case "BET":
      return {
        ...stats,
        looses: action.winner === "Bank" ? stats.looses + 1 : stats.looses,
        wins: action.winner === "Player" ? stats.wins + 1 : stats.wins,
        wallet: action.newWallet,
      };
    default:
      return stats;
  }
};
