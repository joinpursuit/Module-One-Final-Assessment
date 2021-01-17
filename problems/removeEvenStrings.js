/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

function removeEvenStrings(arr) {
    let string=[]
    for (let i=0; i<arr.length; i++){
        let char= arr[i]
        if ((char.length % 2)=== 1){
            string.push(arr[i])
         }
    }
    return string
}

module.exports = removeEvenStrings
