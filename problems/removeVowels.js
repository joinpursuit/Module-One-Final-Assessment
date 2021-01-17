/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
   let arr = str.split()
   return arr.map((el) => {
    return el.replace(/[aeiouAEIOU]/g, '' )
   })
  .join("")
}

module.exports = removeVowels
