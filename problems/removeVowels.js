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
  let newArr = [];
  let arr = str.split('');
  let vowels = ["a","e","i","o","u","A","E","I","O","U"]

  for (let i = 0; i <= arr.length; i++) {
    if (vowels.includes(arr[i])) {
    } else {
      newArr.push(arr[i])
     }
  }
  return newArr.join('')
}

module.exports = removeVowels
