// recursion to out the product of array
function productOfArray(arr) {
  let result = 1;
  if (arr.length === 1) return arr[0];

  result = arr[0] * productOfArray(arr.slice(1));
  return result;
}

console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([1, 2, 3])); // 6
