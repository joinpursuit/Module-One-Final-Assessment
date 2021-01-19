/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let nstring = n.toString()
    return nstring.length
    

}

module.exports = numberOfDigits

console.log(numberOfDigits(67))