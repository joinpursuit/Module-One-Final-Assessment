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
let newStr = ''
for(let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() !== "a" && str[i].toLowerCase() !== "e" && str[i].toLowerCase() !== "i" && str[i].toLowerCase() !== "o" && str[i].toLowerCase() !== "u") {
    newStr += str[i]
}

}
return newStr
}

// let vowels = ["a", "e", "i", "o", "u"]
// let newStr = "";
// for(let i = 0; i < str.length; i++) {
//     let letter =str[i].toUpperCase
//     if(!vowels.includes(letter)) {
//         newStr += str[i];
//     } else {
//         newStr += str[i]
//     }
// };
// return newStr;


module.exports = removeVowels
