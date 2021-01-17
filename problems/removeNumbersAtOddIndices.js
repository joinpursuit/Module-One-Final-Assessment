/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
let arrNew = []
    for (let i = 0; i < arr.length; i += 2){
        arrNew.push(arr[i])
    }
    return arrNew
}


module.exports = removeNumbersAtOddIndices