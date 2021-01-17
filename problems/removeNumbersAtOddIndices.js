/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices() {
    let arr = []
    for(let i = 0; arr.length; i = i++)
    if(i % 2 == 0) {
        arr.splice(i, 0);
    }
};

module.exports = removeNumbersAtOddIndices