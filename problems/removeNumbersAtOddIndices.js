/** Remove all numbers at odd indices from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - An array removing all elements initially appearing at an odd index
 */
function removeNumbersAtOddIndices(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i + 1, 1);
  }
  return arr;
}

  //   let newArr = [];
  //   for (let i = 0; i <= arr.length; i++) {
  //     if (!i % 2 === 1) {
  //       i += newArr[i]
  //     }
  //   }
  //   return newArr;
  // }

module.exports = removeNumbersAtOddIndices;
