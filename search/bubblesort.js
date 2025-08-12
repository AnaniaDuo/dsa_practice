// bubble sort: sorting 2 consecutive number at a time and cont. to end
// O(n^2)
function bubblesort(arr) {
  // loop through the arr from end to startt
  // inside the loop, start another loop from start to end and compare 2 consecutive items
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubblesort([2, 3, 1, 5, 6, 9, 0]));
