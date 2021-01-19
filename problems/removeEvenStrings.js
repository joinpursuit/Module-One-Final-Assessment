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

function removeEvenStrings() {
//    // takes in array of strings
//    // if element is even indexed remove it

//    return filtered = arr.filter((element) => {
//         for(let i = 0; i > element.length; i++) {
//             if (element[i] % 2 !== 0) {
//                 return element
//             }
//         }
//     })
   
   // else add odd indexed string to new array
   // return new array

}

console.log(removeEvenStrings(["a", "bb", "ccc", "dddd", "eeeee"]))
console.log(removeEvenStrings(["the", "cat", "is", "gray"]))
console.log(removeEvenStrings(["four"]))
console.log(removeEvenStrings([]))

module.exports = removeEvenStrings
