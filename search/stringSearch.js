/*
Write a function to find how many times the shorter string appears in longer string
*/

function stringSearch(longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    let found = true;
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) {
        found = false;
        continue;
      }
    }
    if (found) count++;
  }
  return count;
}
console.log(stringSearch("omg", "omg"));
console.log(stringSearch("howomghomg", "omg"));
console.log(stringSearch("howomkhoml", "omg"));
