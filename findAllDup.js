/*
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.
*/
// O(n)
function findAllDuplicates(arr) {
  if (arr.length === 0) return [];

  let result = [];
  let obj = {};
  // looping through the array and store each ele into an obj with its freq
  for (const ele of arr) {
    obj[ele] ? obj[ele]++ : (obj[ele] = 1);
  }

  for (const key in obj) {
    if (obj[key] === 2) result.push(Number(key));
  }
  return result;
}

// better solution using set instead of object => only one for loop
function findAllDuplicatesSolution2(arr) {
  let result = [];
  let s = new Set();

  for (const ele of arr) {
    s.has(ele) ? result.push(ele) : s.add(ele);
  }
  return result;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1

console.log("-------SOLUTION 2---------");

console.log(findAllDuplicatesSolution2([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicatesSolution2([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicatesSolution2([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
