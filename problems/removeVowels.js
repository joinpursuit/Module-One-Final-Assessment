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
    let trash = ''
    let filtered = ''
    for(let i = 0;i<str.length;i++){
        if(str[i] === 'a' || str[i] === 'e' ||str[i]=== 'i'||str[i] ==='o'||str[i] === 'u'||str[i] === 'A' || str[i] === 'E' ||str[i]=== 'I'||str[i] ==='O'||str[i] === 'U'){
            trash = trash + str[i]
          } else{
            filtered = filtered + str[i]
          }
        }
    return filtered

}

module.exports = removeVowels
