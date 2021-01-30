/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

function removeEvenStrings(arr) {
    output = arr.filter((el, index) => !(index % 2));
    return output;
}




// let ouptut = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length % 2 === 1) {
//         ouptut.push(arr[i]);
//     }
// }

// return ouptut;

module.exports = removeEvenStrings


//Write down the steps to solve the question
//Use a sample input
//Sample output
