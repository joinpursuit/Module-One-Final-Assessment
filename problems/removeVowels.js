/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

function removeVowels(str) {
    let arr = str.split("")
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "o" && arr[i] !== "e" && arr[i] !== "u" && arr[i] !== "i" && arr[i] !== "A" && arr[i] !== "E" && arr[i] !== "I" && arr[i] !== "U" && arr[i] !== "O" && arr[i] !== "a") {
            out.push(arr[i])
        }

    }
    return out.join("")
}

module.exports = removeVowels
