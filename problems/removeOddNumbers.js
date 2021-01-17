/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
const removeOddNumbers = arr => arr.filter(el => el % 2 === 0)

module.exports = removeOddNumbers