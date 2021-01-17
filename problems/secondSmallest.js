/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

const removeNumbersAtOddIndices = require("./removeNumbersAtOddIndices")

function secondSmallest(arr) {
    let first = +Infinity
    let second = +Infinity
    arr.forEach((num) => {
        if (num < first){
            second = first
            first = num
        } else if (num < second){
            second = num
        }
    })
    return second
  
}

module.exports = secondSmallest
