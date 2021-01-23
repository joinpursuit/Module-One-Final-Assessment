/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let digits = 0
    let str = n.toString()
    for (let element of str) {
        digits++
    }
    return digits
}

console.log(numberOfDigits(2784))

module.exports = numberOfDigits
