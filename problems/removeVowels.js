/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
  let noVowels = "";
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    if (!vowels.includes(word)) {
      noVowels += word;
    }
  }
  return noVowels;
}

module.exports = removeVowels;
