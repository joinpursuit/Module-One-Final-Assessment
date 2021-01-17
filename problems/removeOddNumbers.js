const removeNumbersAtOddIndices = require("./removeNumbersAtOddIndices")

/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    return arr.filter((num)=>{
        return num % 2 === 0
        })
}

module.exports = removeOddNumbers