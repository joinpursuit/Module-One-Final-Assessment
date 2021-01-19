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
    let newArr = []
    for (let element of arr) {
        if (element.length % 2 === 1) {
            newArr.push(element)
        }
    }
    return newArr
}

console.log(removeEvenStrings([
    "The",
    "only",
    "thing",
    "we",
    "have",
    "to",
    "fear",
    "is",
    "fear",
    "itself",
  ]))

module.exports = removeEvenStrings
