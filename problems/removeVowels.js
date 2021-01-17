/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let newString = "";
    for (let i = 0; i < str.length; i += 1) {
      if (
        str[i].toLowerCase() !== "a" &&
        str[i].toLowerCase() !== "e" &&
        str[i].toLowerCase() !== "o" &&
        str[i].toLowerCase() !== "i" &&
        str[i].toLowerCase() !== "u"
      )
        newString += str[i];
    }
    return newString
}

module.exports = removeVowels
