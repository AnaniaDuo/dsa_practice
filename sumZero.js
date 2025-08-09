/*
  Write a function called sumZero which accepts a sorted array of integers.
  The function should find the first pair where the sum is 0.
  Return an array that includes both values the sum to zero or undefined if
  a pair does not exist.
*/

// example arr = [-1,0,1] then result is [-1, 1]

// O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }

  return undefined;
}

console.log(sumZero([-1, 0, 1]));
console.log(sumZero([-3, 0, 1, 3]));
console.log(sumZero([-4, 0, 1, 2, 3]));

// O(n) using pointers since the array is sorted
function sumZeroSolution2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }

  return undefined;
}
console.log("-------SOLUTION 2---------");
console.log(sumZeroSolution2([-1, 0, 1]));
console.log(sumZeroSolution2([-3, 0, 1, 3]));
console.log(sumZeroSolution2([-4, 0, 1, 2, 3]));
