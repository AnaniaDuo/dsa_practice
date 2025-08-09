// Window Slide
// example maxSubarraySum([-1,2, 1, 8, 3], 3) = 12
// O(n)
function maxSubarraySum(arr, num) {
  // edge case
  if (num > arr.length) return null;

  // using window side
  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[j + i];
    }
    if (temp > max) max = temp;
  }
  return max;
}

console.log(maxSubarraySum([-1, 2, 1, 8, 3], 3));
