/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let count = 0 
    let str = n.toString()
    for (let i = 0; i < str.length; i++) {
        count += 1
    }
   return count 
}

console.log(numberOfDigits(4))



module.exports = numberOfDigits
