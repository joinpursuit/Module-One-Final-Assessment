/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let arr = n.toString().split('').map(Number)
    return arr.length
}

module.exports = numberOfDigits
