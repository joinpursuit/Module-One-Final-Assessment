/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
    let smallest = Infinity
    let secondSmallest = Infinity
    arr.forEach((el) => {
        if (el < smallest) {
            secondSmallest = smallest
            smallest = el
        }
        else if (el < secondSmallest) {
            secondSmallest = el
        }
    })
    return secondSmallest
}

module.exports = secondSmallest
