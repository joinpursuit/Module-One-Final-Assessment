/**

* Determines whether or not a number is odd.

* @param {number} n - The input number.
* @returns {boolean} - True if n is odd, false if n is even, or not a number.

*/

function isOdd(n) {
    if(n %2 === 1){
        return true
    } else {
        return false
    }
}
console.log((isOdd(1233467)))
console.log((isOdd(4448)))
console.log(isOdd("Hello!"))
console.log(isOdd(NaN))
module.exports = isOdd
