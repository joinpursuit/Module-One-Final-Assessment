/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

function removeEvenStrings(arr) {
  return arr.filter((n) => {
    return n.length % 2 === 1;
  });
}
console.log(removeEvenStrings(["a", "bb", "ccc", "dddd", "eeeee"]));

module.exports = removeEvenStrings;
