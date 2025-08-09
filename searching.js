/*
Given a sorted array of integers, write a function called search, that accepts
a vlue and returns the index where the value passed to the function is located.
If the value is not found, return -1
*/
// example search ([1,2,3,5], 2) //1
// exaple seach([1,2,3,4,5,6,7,8], 8) //7
// O(n)
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(search([1, 2, 3, 5], 2)); //1
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 8)); //7

// better solution is to devide and conquer to reduce the number of operations
// since the array is sorted (binary search)
// O(logn)
function searchSolution2(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] > num) max = middle - 1;
    else if (arr[middle] < num) min = middle + 1;
    else return middle;
  }
  return -1;
}
console.log("-------SOLUTION 2---------");
console.log(searchSolution2([1, 2, 3, 5], 2)); //1
console.log(searchSolution2([1, 2, 3, 4, 5, 6, 7, 8], 8)); //7
