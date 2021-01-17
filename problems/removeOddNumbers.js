/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
const removeOddNumbers = (arr) => {
    let output = arr.filter((el) => {
        return el % 2 === 0;
      });
      return output
}

module.exports = removeOddNumbers