/*
Write a function called sameFrequency. Given two positive integers, find out
if the rwo numbers have the same frequency of digits.
Your solution must have the following complexities: Time: O(n)
*/

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  // check if two numbers have the same digit numbers
  const numArr1 = num1.toString().split("");
  const numArr2 = num2.toString().split("");

  if (numArr1.length !== numArr2.length) return false;
  let obj = {};

  // store each number digit of the first number to an obj as key and count frequency as value
  for (const ele of numArr1) {
    obj[ele] ? obj[ele]++ : (obj[ele] = 1);
  }
  //example after this for loop, we get obj = {1: 1, 8: 1, 2: 1}
  // looping through the second arr
  for (const ele of numArr2) {
    if (obj[ele]) obj[ele]--;
    else return false;
  }
  return true;
}

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
