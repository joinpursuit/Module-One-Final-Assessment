/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

function removeEvenStrings(arr) {
  newArray = [];
  arr.forEach((el) => {
    if (el.length % 2 === 1) {
      newArray.push(el);
    }
  });
  return newArray;
}

module.exports = removeEvenStrings;
