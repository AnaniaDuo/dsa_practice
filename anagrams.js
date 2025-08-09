// Write a function to determine if the second string is an anagram of the first
// example cinema and iceman

// let's use frequency counters
// count the frequency of each character of the first string and store in an obj
// count the frequency of each character of the second string and store in an obj
// O(n + m)
function anagram(str1, str2) {
  if (str1.length !== str1.length) return false;

  let freqObj1 = {};
  let freqObj2 = {};

  for (let i = 0; i < str1.length; i++) {
    freqObj1[str1[i]] = ++freqObj1[str1[i]] || 1;
  }

  for (let i = 0; i <= str2.length; i++) {
    freqObj2[str2[i]] = ++freqObj2[str2[i]] || 1;
  }

  console.log("freq1", freqObj1, "freq2", freqObj2);

  for (let key in freqObj1) {
    if (!(key in freqObj2)) return false;
    if (freqObj2[key] !== freqObj1[key]) return false;
  }
  return true;
}

console.log(anagram("iceman", "cinema"));
console.log(anagram("aaz", "zza"));
console.log(anagram("rat", "car"));
console.log(anagram("timetwisttext", "texttwisttime"));

// A better approach O(n + m) but only using 2 for loops
// store each char of the first string into an obj
// loop through each char of the second string and see if the obj has the key
// if no => return false
// if yes, subtract 1 from the object at key

function anagramSolution2(str1, str2) {
  if (str1.length !== str2.length) return false;

  // store each char of the first string into an obj

  let obj = {};

  for (const char of str1) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }

  // loop through each char of the second string and see if the obj has the key
  // if no => return false
  // if yes, subtract 1 from the object at key

  for (const char of str2) {
    //  can't find letter in obj keys or if obj at key letter is zero then it's
    //  not an anagram

    if (!obj[char]) return false;
    else obj[char] -= 1;
  }

  console.log("what is obj", obj);

  return true;
}

console.log("-------SOLUTION 2---------");
console.log(anagramSolution2("iceman", "cinema"));
console.log(anagramSolution2("aaz", "zza"));
console.log(anagramSolution2("rat", "car"));
console.log(anagramSolution2("timetwisttext", "texttwisttime"));
