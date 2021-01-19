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
    let arr = []
    for (let i = 0; i < str.length; i++) {
      if (!(str[i] === "A" || str[i] === "a" || str[i] === "E" || str[i] === "e" || str[i] === "I" || str[i] === "i" || str[i] === "O" || str[i] === "o" || str[i] === "U" || str[i] === "u")) {
        arr.push(str[i])
      }
    }
    return arr.join("")
    }
    console.log(removeVowels("Sunny apple world"))

module.exports = removeVowels
