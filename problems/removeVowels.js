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

const removeVowels = (str) => {
    if(str === "Aa" || str === "Ee" || str === "Ii" || str === "Oo" || str === "Uu"){
        return str;
    }else{
        return str;
    }
    
    }


module.exports = removeVowels
