/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i])
    }
    return newArr
}

module.exports = removeNumbersAtOddIndices