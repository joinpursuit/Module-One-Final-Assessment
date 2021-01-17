/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

const secondSmallest = (arr) => {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el < smallest) {
          secondSmallest = smallest;
          smallest = el;
      } else if (el > smallest && el < secondSmallest) {
          secondSmallest = el;
      }
  }
  return secondSmallest
}

module.exports = secondSmallest
