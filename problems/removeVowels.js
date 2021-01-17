/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let newStr = ""
    // str = str.toLowerCase();
    for (let letter of str) {
        if (letter.toLowerCase() !== "a" && letter.toLowerCase() !== "e" && letter.toLowerCase() !== "i" && letter.toLowerCase() !== "o" && letter.toLowerCase() !== "u") {
            newStr += letter
        }
    }
    return newStr
}

module.exports = removeVowels
