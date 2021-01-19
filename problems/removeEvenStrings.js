/**

* Takes in an array of strings and returns a new array that contains only the strings 
* that have an odd number of characters.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - A new array with the strings in arr that have an odd number of characters
*
* ex: removeEvenStrings(["a", "bb", "ccc", "dddd", "eeeee"])
* returns: ["a", "ccc", "eeeee"]
* 
* ex: removeEvenStrings(["the", "cat", "is", "gray"])
* returns: ["the", "cat"]
*
* ex: removeEvenStrings(["four"])
* returns: []
* 
* ex: removeEvenStrings([])
* returns: []
*/

function removeEvenStrings(arr) {
  newArr = [];
  for (let i = 0; i <= arr.length; i += 2) {
    arr.splice(i % 2)
  }
  return newArr
}

module.exports = removeEvenStrings;
