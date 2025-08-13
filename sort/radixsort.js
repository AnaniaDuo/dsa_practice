// radix sort big O
// time complexity: O(nk) where n is arr length and k is the most digit
// space complexity: O(n + k)
function radixsort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    // arr = [].concat(...digitBuckets);
    arr = digitBuckets.flat();
  }
  return arr;
}

console.log(radixsort([3, 4, 1, 2, 9, 22, 11, 16, 8]));

// helper function to get digit
function getDigit(num, place) {
  let stringNumArr = num.toString().split("");
  let index = stringNumArr.length - place - 1;
  if (index < 0) return 0;
  return Number(stringNumArr[index]);
}
// helper function to get digit
function getDigit2(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
console.log("--------getDigit---------");
console.log(getDigit(12345, 0)); //5
console.log(getDigit(12345, 1)); //4
console.log(getDigit(12345, 2)); //3
console.log(getDigit(12345, 3)); //2
console.log(getDigit(12345, 4)); //1
console.log(getDigit(12345, 5)); //0
console.log("--------SOLUTION 2---------");
console.log(getDigit(12345, 0)); //5
console.log(getDigit(12345, 1)); //4
console.log(getDigit(12345, 2)); //3
console.log(getDigit(12345, 3)); //2
console.log(getDigit(12345, 4)); //1
console.log(getDigit(12345, 5)); //0

// helper function count digits
function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log("------digitCount------");
console.log(digitCount(123));
console.log(digitCount(23));
console.log(digitCount(-2));
console.log(digitCount(1));

// helper function return the most digits
function mostDigits(arr) {
  let mostDigits = 0;
  for (const num of arr) {
    let digitNumCount = digitCount(num);
    if (digitNumCount > mostDigits) mostDigits = digitNumCount;
  }
  return mostDigits;
}

console.log("-----mostDigits------");
console.log(mostDigits([1, 22, 333, 4444, 55555]));
