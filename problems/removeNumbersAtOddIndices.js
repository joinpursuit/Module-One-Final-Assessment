const removeOddNumbers = require("./removeOddNumbers")

/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    return arr.filter((number,i) => {
       return i % 2 === 0
    })
}

module.exports = removeNumbersAtOddIndices