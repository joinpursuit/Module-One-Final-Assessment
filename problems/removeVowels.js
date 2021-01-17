/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let newStr = "";
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if (!vowels.includes(el)) {
      newStr += el;
    }
  }
  return newStr;


}

module.exports = removeVowels
