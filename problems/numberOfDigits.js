/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let count = 0
    let str = '' + n
    for(let i = 0; i < str.length; i++) {
        count++
    }
    return count
}

module.exports = numberOfDigits
