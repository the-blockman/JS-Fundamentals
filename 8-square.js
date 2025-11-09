const { argv } = require("node:process");

let size = parseInt(argv[2]);
let unit = "x";
let rows = "";
let i;

function createSquare() {
  for (i = 1; i <= size; i++) {
    rows += unit;
  }

  if ((i = size)) {
    for (i = 0; i < size; i++) {
      console.log(rows);
    }
  }
}

if (size >= 1) {
  createSquare();
} else if (size < 1) {
} else {
  console.log("Missing size");
}
