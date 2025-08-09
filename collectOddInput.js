// recursion collect odd inputs

function collectOdd(arr) {
  let result = [];

  function helperCollectOdd(inputArr) {
    if (inputArr.length === 0) return;
    if (inputArr[0] % 2 !== 0) result.push(inputArr[0]);
    helperCollectOdd(inputArr.slice(1));
  }
  helperCollectOdd(arr);
  return result;
}

console.log(collectOdd([1, 2, 4, 5, 6]));

// pure recursion without helper function to collect input
// pure recursion tips: use methods like slice, spread operator, and concat
// that make copies of arrays so you do not mutate them
function collectOddSolution2(arr) {
  let resultArr = [];
  if (arr.length === 0) return resultArr;
  if (arr[0] % 2 !== 0) resultArr.push(arr[0]);
  resultArr = resultArr.concat(collectOddSolution2(arr.slice(1)));
  return resultArr;
}
console.log("--------SOLUTION 2---------");
console.log(collectOddSolution2([1, 2, 4, 5, 6]));
