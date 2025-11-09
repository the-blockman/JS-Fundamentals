const { argv } = require("node:process");

let integer = parseInt(argv[2]);

function factorial(a) {
  if (a <= 1) return 1;
  return a * factorial(a - 1);
}

if (isNaN(integer)) {
  console.log(1);
} else {
  console.log(factorial(integer));
}
