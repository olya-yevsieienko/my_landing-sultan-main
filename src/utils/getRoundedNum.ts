export const getRoundedNum = (num: number) => {
  const m = Math.pow(10, 2);

  return Math.round(num * m) / m;
};
