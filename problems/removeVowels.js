/**
* Removes all vowels from an input string. 
* For this problem, treat y as a consonant, not a vowel.
* Vowels are "a", "e", "i", "o", and "u" (upper and lowercase)
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*
* ex: removeVowels("HELLO")
* returns: "HLL"
*
* ex: removeVowels("Sunny")
* returns: "Snny"
*
*/

function removeVowels(str) {
    let str2 = str.toLowerCase()
    let word = ''
    for (let i = 0; i < str2.length; i++) {
      if ((str2[i] === 'a') || (str2[i] === 'e') || (str2[i] === 'o') || (str2[i] === 'i') || (str2[i] === 'u')) {
        word = word + ""
      }
      else {
        word = word + str[i]
      }
    }
    return word
}

module.exports = removeVowels
