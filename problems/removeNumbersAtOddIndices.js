/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
let output = arr.filter((el) =>{
    return el % 2 ===1
})
return output
}

module.exports = removeNumbersAtOddIndices