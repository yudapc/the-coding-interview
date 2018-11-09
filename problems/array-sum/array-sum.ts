const flatten = (arr: []) => {
  return arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );
};

const arraySum = arr => flatten(arr).reduce((a, b) => a + b);

console.log(arraySum([1, 2, [3, 4, [5]]]));
