/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let newStr = ""
    for (let char of str) {
        let letter = char.toLowerCase();
        if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") {
            newStr += char;
        }
    }
    return newStr;
}

module.exports = removeVowels
