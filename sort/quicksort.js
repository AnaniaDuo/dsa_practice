function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
function pivotHelper(arr, startIndex = 0, endIndex = arr.length - 1) {
  // picking the first element in array to be the pivot
  let pivot = arr[startIndex];
  let swapIndex = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, swapIndex, startIndex);
  return swapIndex;
}

// O(nlogn)
function quicksort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivotHelper(arr, start, end);
    // left
    quicksort(arr, start, pivotIndex - 1);
    // right
    quicksort(arr, pivotIndex + 1, end);
  }
  return arr;
}

console.log(quicksort([3, 1, 2, 8, 6, 11, 22, 100, 88, 16, 45]));
