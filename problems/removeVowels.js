/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let newStr = ""
    let vowArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (i = 0; i < str.length; i++){
      if (!vowArr.includes(str[i])){
        newStr += str[i]
      }
    }
    return newStr
}

module.exports = removeVowels
