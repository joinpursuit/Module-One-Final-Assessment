/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

const removeVowels = (str) => {
    let newStr = ""
    for(let i =0; i < str.length;i++){
        if(str.length === aeiouAeiou){
           return str.replace(/ aeiouAEIOU/g, "")
        newStr = str
        }
        newStr.map((el)=> {
            if(newStr !== aeiuoAEIOU){
                return newStr;
            }
        })
    }
}






module.exports = removeVowels
