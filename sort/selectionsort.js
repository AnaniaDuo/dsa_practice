// similar to bubble sort, but instead of first placing large values into sorted position, it places smallest values into sorted position

function selectionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    if (smallest !== i) {
      let temp = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionsort([3, 1, 2, 8, 6, 11, 22, 100, 88, 16, 45]));
