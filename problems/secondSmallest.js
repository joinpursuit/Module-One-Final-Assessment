/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {// figure out how to do it with .forEach or an array method.
  let s1 = arr[0] < arr[1] ? arr[0] : arr[1]; // -Infinity
  let s2 = arr[0] > arr[1] ? arr[0] : arr[1]; // -Infinity
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < s1) {
      s2 = s1;
      s1 = arr[i];
    } else if (arr[i] < s2) {
      s2 = arr[i];
    }
  }
  return s2;
}

// console.log(secondSmallest([5, 1, 4, 2, 5, 6]));
// console.log(secondSmallest([1, 10, 7, 90, 5, 4]));

module.exports = secondSmallest;
