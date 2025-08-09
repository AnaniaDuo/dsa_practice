/*
Implement a function called countUniqueValues which accepts a sorted arr and
count the unique values in the array. There can be negative numbers in the array
but it always be sorted
*/

// example countUniqueValues([1, 1, 1, 1, 2]) // 2
// example countUniqueValues([1, 2, 2, 4, 8]) // 4
// example countUniqueValues([-1, 2, 4, 8, 8, 9, 10]) // 6

// O(n)
function countUniqueValues(arr) {
  let obj = {};
  let count = 0;
  for (const ele of arr) {
    if (!obj[ele]) {
      obj[ele] = 1;
      count++;
    } else if (obj[ele] === 1) continue;
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 2, 4, 8])); // 4
console.log(countUniqueValues([-1, 2, 4, 8, 8, 9, 10])); // 6

// if we can alter the arr, this is the a better solution with no external var
// O(n) using 2 pointers

function countUniqueValuesSolution2(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  let j = i + 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) j++;
    else {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log("-------SOLUTION 2---------");
console.log(countUniqueValuesSolution2([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValuesSolution2([1, 2, 2, 4, 8])); // 4
console.log(countUniqueValuesSolution2([-1, 2, 4, 8, 8, 9, 10])); // 6
console.log(countUniqueValuesSolution2([])); // 0
