/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let vowels = {
        'a' : true,
        'e' : true, 
        'i' : true,
        'o' : true,
        'u' : true, 
      };
    
      let output = ""
      for (let i = 0; i < str.length; i++){
        let letter = str[i].toLowerCase();
        if (!vowels[letter]) {
          output += str[i]
        }
      }
      return output
}

module.exports = removeVowels
