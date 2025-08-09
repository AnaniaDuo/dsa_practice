// simple recursion

function countdown(num) {
  // base case when num = 0
  if (num === 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  countdown(num - 1);
}

console.log(countdown(5));
