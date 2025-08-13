// O(nlogn)
function mergesort(arr) {
  //base case for recursion
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, middle));
  let right = mergesort(arr.slice(middle));
  return mergeArray(left, right);
}

// helper function  to merge 2 arrays into a new sorted array
function mergeArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while ((i < arr1.length, j < arr2.length)) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

console.log(mergesort([3, 4, 1, 2, 9, 22, 11, 16, 8]));
