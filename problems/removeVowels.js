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
    let lowerCase = str.toLowerCase()
    let newStr = ""
    for(let i = 0; i < lowerCase.length; i++) {
        if(lowerCase[i] === "a" ||lowerCase[i] === "e" || lowerCase[i] === "i" || lowerCase[i] === "o" || lowerCase[i] === "u") {
            newStr = newStr + ""
        } else {
            newStr = newStr + str[i]
        }
    }
    return newStr
}

module.exports = removeVowels
