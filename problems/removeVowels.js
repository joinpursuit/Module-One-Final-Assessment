/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let vowels =["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let newStr = ""
    for (let i = 0; i< str.length; i++){
        let letter = str[i]
        if(letter !== vowels[0] && letter !== vowels[1] && letter !== vowels[2] && letter !== vowels[3] && letter !== vowels[4]
            && letter !== vowels[5] && letter !== vowels[6] && letter !== vowels[7] && letter !== vowels[8] && letter !== vowels[9]){
            newStr += letter
        }
    }
   return newStr
}

module.exports = removeVowels
