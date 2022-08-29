export const formatData = (datas) => {
  return Object.entries(datas).map((entry) => {
    return [entry[0], entry[1]];
  });
};
