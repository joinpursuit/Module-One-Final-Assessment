/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

const removeVowels = str => {
    let output = "";
    for(let i = 0; i < str.length; i+=1){
        let currChar = str[i];
        if(currChar !== "a" && currChar !== "e" && currChar !== "i" && currChar !== "o" && currChar !== "u" && currChar !== "A" && currChar !== "E" && currChar !== "I" && currChar !== "O" && currChar !== "U"){
            output += currChar;
        }
    }
    return output;
}

module.exports = removeVowels
