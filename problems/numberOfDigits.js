/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let digitArr = n.toString().split('')
    let digitCount = digitArr.length
    return digitCount
}

module.exports = numberOfDigits
