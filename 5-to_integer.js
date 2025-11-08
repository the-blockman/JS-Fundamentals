//console.log(parseInt("89.89"));
const { argv } = require("node:process");

let convertedInteger = parseInt(argv[2]);

if (convertedInteger) {
  console.log(`My number: ${convertedInteger}`);
} else {
  console.log("Not a number");
}
