/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

//function removeEvenStrings() {}
// get each word and figure out if word is even >> forEach  + word.length % 2 === 0
//remove the word >> .replace(word, "")
//need a variable to store the odd strings

const removeEvenStrings = (arr) => {
    let oddWords = [];

    arr.forEach(word => {
        if (word.length % 2 === 1) {
            oddWords.push(word);
        }
    })
    return oddWords;
}

module.exports = removeEvenStrings
