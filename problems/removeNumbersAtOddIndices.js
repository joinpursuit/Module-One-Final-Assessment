/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    newArr = []
    for (let key in arr) {
        if (key % 2 === 0) {
            newArr.push(arr[key])
        }
    }
    return newArr
}

module.exports = removeNumbersAtOddIndices