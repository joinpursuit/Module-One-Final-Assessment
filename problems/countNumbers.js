/**
 * Count all the numbers in an array
 *
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is the number, and the value is the count of that number
 *
 * ex: countNumbers([1,1,1,2,2,3,4])
 * returns { 1:3, 2:2, 3:1, 4:1 }
 */

function countNumbers(arr) {
  let numCount = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (numCount[num]) {
      numCount[num] += 1;
    } else {
      numCount[num] = 1;
    }
  }
  return numCount;
}
module.exports = countNumbers;
