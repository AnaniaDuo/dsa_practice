// console.log("Hello world!");
// function printEachChar(str) {
//   for (let i in str) {
//     console.log(i);
//   }
// }

// console.log(printEachChar("hello"));

function splitNumber(num1) {
  const str1 = num1.toString().split("");
  console.log(str1);
}

splitNumber(100);

function test(num, fororwhile) {
  let counter = 0;
  if (fororwhile === "while") {
    while (counter !== num) {
      counter++;
      console.log("print out");
    }
  } else {
    for (let i = 0; i < num; i++) {
      console.log("print out for");
    }
  }
}

console.log(test(3, "while"));
console.log("-----");
console.log(test(3, "if"));
