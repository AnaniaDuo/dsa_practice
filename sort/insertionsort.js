// insertionsort sorts array by looping through the array from the second element then it takes each element from the unsorted part (right) and inserts it into the correct position in the already sorted part (left), shifting other elements as needed

//example [x, x, x, j, i, x]
//example [1, 2, 4, 5, 3, 6]
//example [1, 2, 4, 5, 5, 6]
//example [x, x, j, x, i, x]
//example [1, 2, 4, 4, 5, 6]

function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j;
    let currentValue = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionsort([3, 1, 2, 8, 6, 11, 22, 100, 88, 16, 45]));
