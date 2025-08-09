function recursiveSum(num) {
  if (num === 1) return 1;
  return num + recursiveSum(num - 1);
}

console.log(recursiveSum(5));
