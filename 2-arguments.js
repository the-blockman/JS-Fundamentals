const { argv } = require("node:process");

// print process.argv
/*argv.forEach((val, index) => {
  if (index >= 2) {
    console.log("Argument found");
  } else {
    console.log("No argument");
  }
});*/

let totalArrayIndex = argv.length - 1;

if (totalArrayIndex < 2) {
  console.log("No argument");
} else if (totalArrayIndex == 2) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
