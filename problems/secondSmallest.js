/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
arr.sort((a, b) => {
return a - b;
});


module.exports = secondSmallest
