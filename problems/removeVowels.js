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
    
    let vowels = {
        'a': true,
        'e': true,           // seen this method of creating vowels object on stackoverflow
        'i': true,          //create vowels object w. key value pairs set to true
        'o': true,
        'u': true
      };
      
    
      let newStr = ""; // create empy string to store new string without vowels
    
      for (let i = 0; i < str.length; i++) {  // iterate through string
        let letter = str[i].toLowerCase();    // handles all letters
        if (!vowels[letter]) {                // if letter is not a vowel add to new string
          newStr += str[i];                   // if letter is a vowel do nothing
        }
      };
      return newStr;                         // return new string without vowels
    };

    console.log(removeVowels("HELLO"))
    console.log(removeVowels("Sunny"))

module.exports = removeVowels
