const hash = {};
const pairs = [];

const arrayPairSum = (k: number, arr: number[]) => {
  const criteria = number => generatePairOfNumber(k, number);
  arr.map(criteria);
  return pairs;
};

const generatePairOfNumber = (k, number) => {
  if (hash[k - number] === false && k - number !== number) {
    pairs.push([number, k - number]);
    hash[k - number] = true;
  }
  !hash[k - number] && (hash[number] = false);
};

console.log(arrayPairSum(10, [3, 4, 5, 6, 7]));
