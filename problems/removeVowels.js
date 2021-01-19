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
let vowals = ['a','A','e','E','i','I','o','O','u','U']
let arr = str.split('') 
let newArr = []
 for (let i = 0; i < arr.length; i++) {
     if (!vowals.includes(arr[i])) {
         newArr.push(arr[i])
     }
 } 
 return newArr.join('')
}
console.log(removeVowels('HELLO'))
module.exports = removeVowels
