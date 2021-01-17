/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

const removeEvenStrings = arr => {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length % 2 !== 0) {
            newArray.push(arr[i]);
        }   
    }
    return newArray;
}

module.exports = removeEvenStrings
