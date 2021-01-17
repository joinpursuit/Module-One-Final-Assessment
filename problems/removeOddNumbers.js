/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    let evens = arr.filter((el) => {
        return el % 2 === 0;
    })
    return evens
}

module.exports = removeOddNumbers