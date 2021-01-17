/** Remove all odd numbers from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - The input array with all odd number removed
 */
function removeOddNumbers(arr) {
  let newArray = [];
  arr.forEach((el) => {
    if (el % 2 === 0) {
      newArray.push(el);
    }
  });
  return newArray;
}

module.exports = removeOddNumbers;
