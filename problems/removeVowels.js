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
    return str
    .split("")
    .filter(el => {
        switch(true){
            case el === 'a' || el === 'A':
                return false;
            case el === 'e' || el === 'E':
                return false;
            case el === 'i' || el === 'I':
                return false;
            case el === 'o' || el === 'O':
                return false;
            case el === 'u' || el === 'U':
                return false;
            default:
                return true;
        }
    })
    .join("")
}

module.exports = removeVowels
