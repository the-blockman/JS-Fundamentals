const { argv } = require("node:process");
const Big = require("big.js");

let integer = parseInt(argv[2]);

function factorial(a) {
  let result = Big(1);
  for (i = a; i >= 1; i--) {
    result = result.times(i);
  }
  return result;
}

if (isNaN(integer)) {
  console.log(1);
} else {
  console.log(factorial(integer).toString());
}
