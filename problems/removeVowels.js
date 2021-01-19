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

// will take in a string
// will return a new string without the vowels
// we do this by splitting the string into an array with str.split('')
// we then iterate through the newArr
// 
function removeVowels(str) {
    let vowel = "aeiou" + "AEIOU"
    let newStr = str
    let chars

    for (let i = 0; i < vowel.length; i++) {
        chars = newStr.split(vowel[i])
        newStr = chars.join('')
    }
    return newStr
}

console.log(removeVowels("Hello kiddo"))

module.exports = removeVowels
