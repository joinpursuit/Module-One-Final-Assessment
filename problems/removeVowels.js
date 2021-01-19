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
    let vowels = "aeiouAEIOU"
    return str.split("").filter(e => !vowels.includes(e)).join("")
    // let newStr = ""
    // for(let i = 0; i < str.length; i++){
    //     if(!vowels.includes(str.charAt(i))){
    //         newStr += str.charAt(i)
    //     }
    // }
    // return newStr
}

module.exports = removeVowels
