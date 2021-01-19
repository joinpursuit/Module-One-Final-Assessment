/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
count = 0
 let stringNum = n.toString()
 let arrNum = stringNum.split("")
for (i=0; i < arrNum.length; i ++){
     count ++
}
return count
}
console.log(numberOfDigits(442135))
module.exports = numberOfDigits
