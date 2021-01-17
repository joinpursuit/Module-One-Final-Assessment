/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

const secondSmallest = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.find((num) => num !== sortedArr[0]);
};
//console.log(secondSmallest([1,9,3,4,4,4,4,4,4,5,6,7,8]))

module.exports = secondSmallest;
