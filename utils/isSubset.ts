export const isSubset = (arr1: any[], arr2: any[]): boolean => {
  let set2 = new Set(arr2);
  return arr1.every((i) => set2.has(i));
};
