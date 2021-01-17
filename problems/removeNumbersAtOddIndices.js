/** Remove all numbers at odd indices from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - An array removing all elements initially appearing at an odd index
 */
function removeNumbersAtOddIndices(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i += 2) {
    output.push(arr[i]);
  }
  return output;
}

console.log(removeNumbersAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(
  removeNumbersAtOddIndices([
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
  ])
);
//   function removeNumbersAtOddIndices(arr) {
//     let output = []
//     for(let i = 0; i < arr.length; i+=2){
//         if(i % 2 === 0){
//             output.push(arr[i])
//         }
//     }
//     return output
// }

// function removeNumbersAtOddIndices(arr) {
//     let output = []
//     for(let i = 0; i < arr.length; i+=2){
//        output.push(arr[i])

//     }
//     return output
// }

module.exports = removeNumbersAtOddIndices;
