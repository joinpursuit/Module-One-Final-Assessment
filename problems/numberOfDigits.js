/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
  let digitSum = 0;
  if (n >= 1)
  digitSum ++
  while (n / 10 >= 1) {
      n /= 10;
      digitSum ++
  }
  return digitSum
}
module.exports = numberOfDigits;
