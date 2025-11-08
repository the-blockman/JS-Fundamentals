const { argv } = require("node:process");

let totalArrayIndex = argv.length - 1;

if (totalArrayIndex <= 1) {
  console.log("No argument");
} else {
  console.log(argv[2]);
}
