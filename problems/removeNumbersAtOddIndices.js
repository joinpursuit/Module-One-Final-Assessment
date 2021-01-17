/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
const removeNumbersAtOddIndices = (arr) => {
    for(let i = 0; i < arr.length; i++){
        return arr.splice(i + 1, 1);
    }

}

module.exports = removeNumbersAtOddIndices