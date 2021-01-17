/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let newStr = "";
    const vowels =  ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for ( let i = 0; i < str.length; i++){
        let char = str[i];
        if(!vowels.includes(char)){
            newStr += char
        }
    }
    return newStr;

}

module.exports = removeVowels
