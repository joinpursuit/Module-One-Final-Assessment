/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    return n
    .toString()
    .split("")
    .length
}
//console.log(numberOfDigits(500000))
module.exports = numberOfDigits
