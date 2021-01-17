/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
  let smallest = Infinity
  let secondSmallest = Infinity
  for (let i = 0; i < arr.length; i++){
    let x = arr[i];
    if (x < smallest) {
        secondSmallest = smallest
        smallest = x
    } else if (x < secondSmallest) {
       secondSmallest = x
    }
  }
  return secondSmallest
}

module.exports = secondSmallest
