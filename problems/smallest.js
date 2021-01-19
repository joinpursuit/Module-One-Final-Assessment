/**
* Return the smallest number in an array of numbers.
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns smallest number
*
* ex: smallest([3, 0])
* returns 0
*
* ex: smallest([1, -1, 1, 1, 1])
* returns -1
*
* ex: smallest([1, 1, 2])
* returns 1 (does not matter if it is the first or second 1)
*/

function smallest(arr) {
    let smallestNum = Infinity
    for (let element of arr) {
        if (smallestNum > element) {
            smallestNum = element
        }
    }
    return smallestNum
}

console.log(smallest([-99, 99, 57, 3, 6, 32]))

module.exports = smallest
