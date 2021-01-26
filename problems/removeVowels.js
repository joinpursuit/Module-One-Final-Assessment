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

function removeVowels(string) {
    const isItAVowel = (character) => {
        let vowels = 'aeiou'.split('')
        for (let i = 0; i < vowels.length; i++) {
            if (character.toLowerCase() === vowels[i]) {
                return true;
            }
        }
        return false;
    }
    let neuStr = '';
    for (let i = 0; i < string.length; i++) {
        if (!isItAVowel(string[i])) {
            neuStr += string[i]
            console.log(neuStr)
        }
    }
    return neuStr
}

// function removeVowels(string) {
//     let stringArr = string.split('')
//     console.log(stringArr)
//     for (let i = 0; i < stringArr.length; i++) {
//         if  (
//              stringArr[i] === 'A'||
//              stringArr[i] === 'E'||
//              stringArr[i] === 'I'||
//              stringArr[i] === 'O'||
//              stringArr[i] === 'U'||
//              stringArr[i] === 'a'||
//              stringArr[i] === 'e'||
//              stringArr[i] === 'i'||
//              stringArr[i] === 'o'||
//              stringArr[i] === 'u'    ) {
//                 stringArr.splice(i,i);
//                 console.log(stringArr)
//         }
//     } return stringArr.join('').toString()
// }
// console.log(removeVowels('HELLO'))
// console.log(removeVowels('the quick brown fox jumped over the lazy dog'))

module.exports = removeVowels
