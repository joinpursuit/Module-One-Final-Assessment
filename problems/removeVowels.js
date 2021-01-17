/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

const removeVowels = (string) => {
  let output = "";
  let vowels = "aeiouAEIOU";
  for (let char of string) {
    if (!vowels.includes(char)) {
      output += char;
    }
  }
  return output;
};
//console.log(removeVowels('hello'))
module.exports = removeVowels;
