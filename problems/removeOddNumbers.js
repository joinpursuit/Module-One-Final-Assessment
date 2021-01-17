/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    let oddNumbers = arr.filter(a => a % 2 === 0)
    return oddNumbers
}

module.exports = removeOddNumbers