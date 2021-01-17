/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
  smallestNum = Infinity;
  secondSmallestNum = Infinity;

  arr.forEach((num) => {
    if (num < smallestNum) {
      secondSmallestNum = smallestNum;
      smallestNum = num;
    } else if (num < secondSmallestNum) {
      secondSmallestNum = num;
    }
  });
  return secondSmallestNum;
}

module.exports = secondSmallest;
