/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

function removeEvenStrings(arr) {
    console.log(arr)
    let evenString = arr.filter((el) => {
        console.log(el)
        el % 2 === 0;
        el++
    })
    return evenString
}
// output = 1
// const onlyOdds = arr.filter(el => el % 2 === 1)
// if (onlyOdds.length === 0) {
//     return arr;

// }
// for (let arr of onlyOdds) {
//     console.log(arr)
//     console.log(output)
//     output *= arr

// }
// return output;
// }
// let output = arr.every((string) => {
//     return string % 2 === 0
// })
// if (output === arr)
//     arr.forEach((string) => {
//         if (string % 2 === 1) {
//             output *= string
//         }
//         console.log(output + "maddy")


module.exports = removeEvenStrings
