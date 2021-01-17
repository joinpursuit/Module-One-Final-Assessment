/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

const removeEvenStrings = arr => arr.filter(string => string.length % 2 === 1)


module.exports = removeEvenStrings
