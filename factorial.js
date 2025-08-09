// 4! = 4*3*2*1 = 24
// recursion way
function factorial(num) {
  // base case
  if (num < 0) return 0;
  if (num === 0) return 1;
  // recursion
  return num * factorial(num - 1);
}

console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(0));

// iterative way
// function factorialSolution2(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorialSolution2(4));
