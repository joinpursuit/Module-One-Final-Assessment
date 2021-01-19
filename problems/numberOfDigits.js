/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
let str = n.toString()

// let numbertoletter = n
// let str = numbertoletter.toString()
// let newStr = str.split('')
// for(let i = 0; i < newStr.length; i++){
//     let newDigit = i
// }
// return newDigit
return str.length
}

module.exports = numberOfDigits
