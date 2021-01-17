/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let count = 0
    let str = n.toString()
    // console.log(str)
    for(let el of str) {
        if(el){
            count ++
        }
    }
    return count
}
// console.log((numberOfDigits(73746)))

module.exports = numberOfDigits
