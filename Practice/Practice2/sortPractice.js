'use strict'

function sort(input) {
  for (let i = 0; i < input.length-1; i++) {
    for (let j = i+1; j < input.length; j++) {
      if (input[i] > input[j] ) {
        let temp = intput[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  //return input.sort((a,b) => a-b); // Remove this line and change to your own algor
}
module.exports = sort
