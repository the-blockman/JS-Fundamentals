const { argv } = require("node:process");

let firstArgument = parseInt(argv[2]);
let secondArgument = parseInt(argv[3]);

function add(a, b) {
  return a + b;
}

console.log(add(firstArgument, secondArgument));
