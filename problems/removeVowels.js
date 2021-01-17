/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let vowels = "aeiouAEIOU"
    return str.split("").filter(letter =>{
        return !vowels.includes(letter)
    }).join("")
}

module.exports = removeVowels
