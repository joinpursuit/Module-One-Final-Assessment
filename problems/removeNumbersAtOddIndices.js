/** Takes an array of numbers and returns a new array 
* with only the numbers at odd indices in the input array. 
* 
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*
* ex: removeNumbersAtOddIndices([0, 1, 2, 3, 4]);
* returns: [0, 2, 4]
*
* ex: removeNumbersAtOddIndices([5, 4, 3, 2, 1]);
* returns: [5, 3, 1]
*/
function removeNumbersAtOddIndices(arr) {
    let filtered = arr.filter((element) => {
        
        if (element % 2 === 0) {
          return true;
        }
      });
        return filtered;
}

console.log(removeNumbersAtOddIndices([0, 1, 2, 3, 4]))
console.log(removeNumbersAtOddIndices([5, 4, 3, 2, 1]))
console.log(removeNumbersAtOddIndices([
    207,
    808,
    814,
    41,
    443,
    689,
    719,
    611,
    174,
    98,
    3,
    632,
    663,
    531,
    970,
    941,
    0,
    554,
    608,
    827,
    330,
    90,
    19,
    857,
    976,
    806,
    499,
    464,
    786,
    590,
    833,
    721,
    898,
    441,
    272,
    37,
    812,
    705,
    35,
    987,
    52,
    63,
    227,
    388,
    267,
    574,
    413,
    262,
    698,
    48,
  ]))

module.exports = removeNumbersAtOddIndices