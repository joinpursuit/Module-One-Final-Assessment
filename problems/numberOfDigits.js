/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let totalDigits = n + ""
    return totalDigits.length
}

module.exports = numberOfDigits
