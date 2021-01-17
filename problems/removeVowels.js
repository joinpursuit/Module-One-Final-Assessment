/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/
let str = "Plain potato"

function removeVowels(str) {
    let vowels = "aeiouAEIOU"
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            newStr += str[i]
        }
    }
    return newStr
}

module.exports = removeVowels
