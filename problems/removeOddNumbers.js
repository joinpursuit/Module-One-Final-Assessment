/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    return arr.filter(number =>{ 
        return number % 2 == 0
    })
}
console.log(removeOddNumbers([1,2,3,4,5,6,7]))
module.exports = removeOddNumbers