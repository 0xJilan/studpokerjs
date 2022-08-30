export const DataReducer = (data, action) => {
  switch (action.type) {
    case "GET_FAUCET":
      return {
        ...data,
        wallet: data.wallet + 1000,
      };

    default:
      return data;
  }
};
