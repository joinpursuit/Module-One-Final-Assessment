/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/


function numberOfDigits(n) {
    return n.toString().length
}

// let numStr = n.toString()
// return numStr.length

// let numStr = n + '0'
// return numStr.length - 1


module.exports = numberOfDigits
