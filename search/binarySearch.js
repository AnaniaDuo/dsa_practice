// Write a function that accepts a sorted array and a value. Return index of value in the array.

//O(logn)
function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== num && right > left) {
    if (arr[middle] > num) {
      right = middle--;
    } else if (arr[middle] < num) {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 7, 15, 22], 15)); //6
console.log(binarySearch([1, 2, 3, 4, 5, 7, 15, 22], 22)); //7
console.log(binarySearch([1, 2, 3, 4, 5, 7, 15, 22], 8)); //-1
console.log(binarySearch([1, 2, 3, 4, 5, 7, 15, 22], 3)); //2
console.log(binarySearch([1, 2, 3, 4, 5, 7, 15, 22], 1)); //0

function binarySearch2(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] === num) return middle;
    else if (arr[middle] > num) max = middle - 1;
    else min = middle + 1;
  }
  return -1;
}
console.log("-------SOLUTION 2---------");
console.log(binarySearch2([1, 2, 3, 4, 5, 7, 15, 22], 15)); //6
console.log(binarySearch2([1, 2, 3, 4, 5, 7, 15, 22], 22)); //7
console.log(binarySearch2([1, 2, 3, 4, 5, 7, 15, 22], 8)); //-1
console.log(binarySearch2([1, 2, 3, 4, 5, 7, 15, 22], 3)); //2
console.log(binarySearch2([1, 2, 3, 4, 5, 7, 15, 22], 1)); //0
