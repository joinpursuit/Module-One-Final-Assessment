/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

const numberOfDigits = (n) => {
    let digits = n.toString();
    return digits.length;
}

module.exports = numberOfDigits
