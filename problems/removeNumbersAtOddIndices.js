/** Remove all numbers at odd indices from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - An array removing all elements initially appearing at an odd index
 */
function removeNumbersAtOddIndices(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = removeNumbersAtOddIndices;
