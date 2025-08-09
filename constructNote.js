/*
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
*/

function constructNote(message, letterSet) {
  // if letterSet's length < length of message => return false
  if (letterSet.length < message.length) return false;

  let obj = {};

  // store each char of message into an obj
  for (const char of message) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }

  // looping through each char in letter set to see if enough numbers of letter
  for (const char of letterSet) {
    if (obj[char]) {
      obj[char]--;
    }
  }

  for (const key in obj) {
    if (obj[key]) return false;
  }
  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
