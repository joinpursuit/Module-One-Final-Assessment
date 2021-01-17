/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
    let smallNum = Infinity;
    let secondSmall = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallNum) {
        secondSmall = smallNum
        smallNum = arr[i];
      } else if(arr[i] < secondSmall) {
        secondSmall = arr[i]
      }
    }
    return secondSmall
  }
module.exports = secondSmallest
