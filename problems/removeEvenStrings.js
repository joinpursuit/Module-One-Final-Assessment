/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

function removeEvenStrings(arr) {
    let arr = 'hello';
    return arr.filter(num => num % 2)
}

module.exports = removeEvenStrings
