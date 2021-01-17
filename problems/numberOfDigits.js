/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let newStr = n.toString()
    return newStr.length 
}

module.exports = numberOfDigits
