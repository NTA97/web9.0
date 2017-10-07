'use strict'

function search(input, target) {
  let j=0;
  for (var i = 0; i < input.length; i++)
    if (input[i] == target) {
      console.log(i);
      j=1;
      break;
    }
  if (j === 0) {
    console.log("-1");
  }

  return input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = search
