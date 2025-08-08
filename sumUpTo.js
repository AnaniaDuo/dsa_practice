// O(n)
function sumUpTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// O(1)
function sumUpToSolution2(n) {
  return (n * (n + 1)) / 2;
}

// 1 + 2 + 3 + 4 + 5 = 15
let t1 = performance.now();
console.log(sumUpTo(100000000));
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
console.log(sumUpTo(10));
let t3 = performance.now();
console.log(sumUpToSolution2(100000000));
let t4 = performance.now();

console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds.`);
console.log(sumUpToSolution2(10));
