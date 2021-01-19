/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/
// convert n into something I can iterate over
//toString is easier for me than array
function numberOfDigits(n) {
  let count = 0;
  let string = n.toString();
  for (let num of string) {
    if (num) {
      count += 1;
    }
  }
  return count;
}

module.exports = numberOfDigits;
