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
    let newArray = []
    let chars = arr.toString().split(",")
    for(let i = 0; i < chars.length; i++){
        if(chars[i] % 2 !== 0) {
            newArray.push(chars[i])
        }
    }
    return newArray
    
}

module.exports = removeEvenStrings
