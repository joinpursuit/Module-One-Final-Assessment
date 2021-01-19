/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
   return n.toString().length
}


console.log(numberOfDigits(10))
console.log(numberOfDigits(1000))
console.log(numberOfDigits(100000))

module.exports = numberOfDigits
