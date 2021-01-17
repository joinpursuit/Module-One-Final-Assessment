/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

function removeEvenStrings(arr) {
    newArr = []
    arr.filter((str) => {
        if(str.length % 2 === 1){
            newArr.push(str)
        }
    })
    return newArr

}

module.exports = removeEvenStrings
