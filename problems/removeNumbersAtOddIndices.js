/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
const removeNumbersAtOddIndices = nums => {
    let output = nums.filter((el,i) => {
        return i % 2 === 0;
    });
    return output;
}

module.exports = removeNumbersAtOddIndices