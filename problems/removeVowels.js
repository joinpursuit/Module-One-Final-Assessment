/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

const removeVowels = (str) => {
    let vowels = /[aeiou]+/gi
    return str.replace(vowels, "")
}


module.exports = removeVowels
