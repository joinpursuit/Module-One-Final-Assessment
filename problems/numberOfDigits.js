/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let string = n.toString()
    let num = 0
    for(let i = 0;i<string.length;i++){
        num = num + 1
    }
    return num

}

module.exports = numberOfDigits
