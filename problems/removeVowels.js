/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
let newstr = "";
for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u" && char !== "A" && char !== "E" && char !== "I" && char !== "O" && char !== "U"){
        newstr += char
    }
}
    return newstr
}

module.exports = removeVowels
