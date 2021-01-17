/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    return arr.filter((value, index) => index % 2 !== 1)
}

module.exports = removeNumbersAtOddIndices