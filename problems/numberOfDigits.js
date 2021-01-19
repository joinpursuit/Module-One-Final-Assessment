/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
let strNum = n.toString()
let digitCount = 0
    for(i = 0; i < strNum.length; i++){
        digitCount ++

    }
    return digitCount

}

module.exports = numberOfDigits
