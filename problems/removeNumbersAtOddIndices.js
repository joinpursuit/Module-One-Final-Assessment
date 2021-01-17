/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
const removeNumbersAtOddIndices = (arr) => {
    let evenIndices = []
    arr.forEach((el, i) => {
        if (i % 2 === 0) {
            evenIndices.push(el);
        }
    })
    return evenIndices
}

module.exports = removeNumbersAtOddIndices