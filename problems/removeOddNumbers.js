/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    let output = arr.filter((element) => {
        return element % 2 === 0
      })
      return output
      };


module.exports = removeOddNumbers