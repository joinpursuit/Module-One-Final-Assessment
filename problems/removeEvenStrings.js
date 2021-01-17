/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

const removeEvenStrings = (arr) => {
    let odds = []
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (el.length % 2 === 1) {
            odds.push(el)
        } else if (arr.length === 0) {
            return ""
        }
    }    
    return odds
}

module.exports = removeEvenStrings
