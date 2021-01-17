/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
const removeNumbersAtOddIndices = arr => {
    let evenIdxArray = []
    for (let i = 0; i < arr.length; i +=2) {
        if(i % 2 === 0) {
            evenIdxArray.push(arr[i])
        }
    }
    return evenIdxArray
}



module.exports = removeNumbersAtOddIndices