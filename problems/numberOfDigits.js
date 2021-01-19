/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    return n.toString().length 
}

let n = 123456789
console.log(numberOfDigits(n))

module.exports = numberOfDigits
