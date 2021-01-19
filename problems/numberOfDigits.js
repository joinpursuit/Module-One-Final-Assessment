/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    return n.toString().length
    // if (typeof n === "number") {
    //     return n.length
    // }
}

module.exports = numberOfDigits
