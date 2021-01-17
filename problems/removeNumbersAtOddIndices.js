/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    let counter = 0;
    return arr.filter(el => counter++ % 2 === 0)

}

module.exports = removeNumbersAtOddIndices