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
    let newOdd = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length%2 !==0 ){
            newOdd.push(arr[i])
        }
    }
       return newOdd 
}



module.exports = removeEvenStrings
