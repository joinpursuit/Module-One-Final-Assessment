/**

* Return the second smallest number in an array of numbers

* @param {number[]} arr - The input array
* @returns {number} - Returns the second smallest number.

*/

function secondSmallest(arr) {
  let smallest = Math.max(arr[0], arr[1])
  let secondSmallest = Math.min(arr[0], arr[1])
  for (let val of arr) {
    if (val < smallest) {
      secondSmallest = smallest
      smallest = val
    } else if (val < secondSmallest) {
      secondSmallest = val
    }
  }
  return secondSmallest
}

module.exports = secondSmallest
