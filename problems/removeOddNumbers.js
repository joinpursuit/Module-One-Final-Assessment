/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    return arr.filter((el)=> el % 2 === 0)
}

// console.log((removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])))

module.exports = removeOddNumbers