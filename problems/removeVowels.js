/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
let vowels = "aeiouAEIOU"
let output = str.filter((el) => {
    return el !== vowels
})
return output
};


module.exports = removeVowels
