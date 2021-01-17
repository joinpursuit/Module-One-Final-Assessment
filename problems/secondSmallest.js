/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

const secondSmallest = arr => {
    let smallest = Infinity
    let secondSmallest = Infinity
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < smallest) {
            smallest = element
        }
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > smallest && element < secondSmallest) {
            secondSmallest = element
        }
    }
    return secondSmallest
}

module.exports = secondSmallest
