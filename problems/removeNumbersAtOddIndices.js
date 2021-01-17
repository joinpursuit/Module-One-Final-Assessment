/** Remove all numbers at odd indices from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - An array removing all elements initially appearing at an odd index
 */
function removeNumbersAtOddIndices(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i += 2) {
    output.push(arr[i]);
  }
  return output;
}

// console.log(removeNumbersAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9]));
module.exports = removeNumbersAtOddIndices;
