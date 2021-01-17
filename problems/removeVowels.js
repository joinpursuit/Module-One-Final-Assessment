/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {//figure out how to do with an array method
  let newStr = "";
  let vowArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (!vowArr.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;

}

// console.log(removeVowels("hello"));
// console.log(removeVowels("CAPITAL LETTERS DO COUNT"))
// console.log(removeVowels("y doesn't count"))
module.exports = removeVowels;
