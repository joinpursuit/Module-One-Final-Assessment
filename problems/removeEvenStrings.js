/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

const removeEvenStrings = (arr) => {
    let output = []
     arr.forEach((words) => {
        if(words.length % 2 === 1){
           output.push(words)
        }
        })
        return output
    }
    
module.exports = removeEvenStrings
