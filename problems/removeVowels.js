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
    let lowerString = str.toLowerCase()
    newArray = []
    for (let i = 0; i < lowerString.length; i++) {
        if (lowerString[i] === 'a' || lowerString[i] === 'e' || lowerString[i] === 'i' || lowerString[i] === 'o' || lowerString[i] === 'u') {
            continue
        }
        else {
            newArray.push(str[i])
        }
    }
    return newArray.join('')
}

module.exports = removeVowels
