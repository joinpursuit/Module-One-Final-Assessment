/** Takes an array of numbers and returns a new array 
* with only the numbers at odd indices in the input array. 
* 
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*
* ex: removeNumbersAtOddIndices([0, 1, 2, 3, 4]);
* returns: [0, 2, 4]
*
* ex: removeNumbersAtOddIndices([5, 4, 3, 2, 1]);
* returns: [5, 3, 1]
*/
function removeNumbersAtOddIndices(arr) {
    let i = 0
    let newArr = []
    while (i < arr.length) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
        i++
    }
    return newArr
}

console.log(removeNumbersAtOddIndices([1, 2, 3, 4, 5, 6]))
console.log(removeNumbersAtOddIndices([1, 4, 7, 10]))


module.exports = removeNumbersAtOddIndices