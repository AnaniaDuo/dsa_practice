/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

// Time: O(n), Space: O(n)
function areThereDuplicates(arr) {
  let obj = {};
  for (const char of arr) {
    if (!obj[char]) obj[char] = 1;
    else return true;
  }
  return false;
}

function areThereDuplicatesSolution2() {
  return new Set(arguments).size !== arguments.length;
}

// Time: O(nlogn), Space: O(1)
// using sort ascending and 2 pointers
function areThereDuplicatesSolution3(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  // args = args.sort((a, b) => a - b);

  console.log("what us args now", args);

  let left = 0;
  let right = 1;

  while (right < args.length) {
    // always compare two consecutive ele in args since it's already sorted
    if (args[left] !== args[right]) {
      left++;
      right++;
    } else return true;
  }
  return false;
}

console.log(areThereDuplicates([1, 2, 3])); // false
console.log(areThereDuplicates([1, 2, 2])); // true
console.log(areThereDuplicates(["a", "b", "c", "a"])); // true

console.log("-------SOLUTION 2---------");
console.log(areThereDuplicatesSolution2([1, 2, 3])); // false
console.log(areThereDuplicatesSolution2([1, 2, 2])); // true
console.log(areThereDuplicatesSolution2(["a", "b", "c", "a"])); // true

console.log("-------SOLUTION 3---------");
console.log(areThereDuplicatesSolution3(1, 2, 3)); // false
console.log(areThereDuplicatesSolution3(1, 2, 2)); // true
console.log(areThereDuplicatesSolution3("a", "b", "c", "a")); // true
console.log(areThereDuplicatesSolution3("apple", "banana", "candy", "apple")); // true
