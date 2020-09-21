/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel

* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.

*/

function removeVowels(str) {
  return str
  .split("")
  .filter((char) => !"aeiou".split("").includes(char.toLowerCase()))
  .join("")
}

module.exports = removeVowels
