/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    output = arr.filter((el, index) => !(index % 2));
    return output;
}






// for (i = 0; i < arr.length; i += 2) {
//     output.push(arr[i]);

// }



module.exports = removeNumbersAtOddIndices