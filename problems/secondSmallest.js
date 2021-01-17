/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
  let smallNum = Infinity;
  let secSmallNum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > smallNum && arr[i] < secSmallNum) {
        secSmallNum = arr[i];
      }
    }
  }
  return secSmallNum;
}

module.exports = secondSmallest;
