const { Console } = require("node:console");
const { argv } = require("node:process");

let integer = parseInt(argv[2]);

function factorial(a) {
  let result = 1;
  for (i = a; i >= 1; i--) {
    result *= i;
  }
  return result;
}

if (integer === NaN) {
  console.log(1);
} else {
  console.log(factorial(integer));
}
