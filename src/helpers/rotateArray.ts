export const rotateArray = (arr: string[], idx: number) => {
  if (idx <= 0) {
    return arr;
  }

  return arr.slice(idx).concat(arr.slice(0, idx));
};
