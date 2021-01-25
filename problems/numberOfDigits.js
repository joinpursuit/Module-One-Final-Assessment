/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
let count = 0
if (n >= 1){
    ++count
}
while(n / 10 >= 1){
    n /= 10
    ++count
}
return count
}

module.exports = numberOfDigits
