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

function removeVowels (str) {
  string = ''
  vowels = 'aeiouAEIOU'
  for (let letter of str) {
    for (let elm of vowels) {
      if (letter.includes(elm)) {
        char = ''
        break
      } else {
        char = letter
      }
    }
    string += char
  }

  return string
}

module.exports = removeVowels
