/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
 let convert = n.toString()
 let count = 0 
 for (let i = 0; i < convert.length; i ++) {
     count++
 } 
 return count
}
console.log(numberOfDigits(21212121210))
module.exports = numberOfDigits
