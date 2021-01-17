/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
const removeOddNumbers = (arr) => {
    return arr.filter((el) => {
        return el % 2 === 0;
    })

}

module.exports = removeOddNumbers