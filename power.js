/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/
// example 2 ^ 4 = 2 * 2 * 2 * 2 = 16
function power(base, powerNum) {
  if (powerNum === 0) return 1;
  return base * power(base, powerNum - 1);
}
// function powerFunc(base, power) {
//   if (power === 0) return 1;
//   return base * powerFunc(base, power - 1);
// }

console.log(power(2, 4));
console.log(power(2, 5));
console.log(power(3, 3));
// console.log(powerFunc(2, 4));
// console.log(powerFunc(2, 5));
// console.log(powerFunc(3, 3));
