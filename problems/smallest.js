/**
* Return the smallest number in an array of numbers.
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns smallest number
*
* ex: smallest([3, 0])
* returns 0
*
* ex: smallest([1, -1, 1, 1, 1])
* returns -1
*
* ex: smallest([1, 1, 2])
* returns 1 (does not matter if it is the first or second 1)
*/

function smallest(arr) {
let l = Infinity //store largest
let l2 = Infinity //store second largest
for (let i = 0 ; i < arr.length; i ++) {
    if (arr[i] < l) { //if 5 is greater than - infinity
        l = arr[i]  // l becomes 5
        l2 = l
    } else if (arr[i] < l2) {
        l2 = arr[i]
    }
}
return l2
}

module.exports = smallest


// let small = arr.reduce((acc,currentEl) =>{
//     if(acc < currentEl) {
//         return acc
//     } else {
//         return currentEl
//     }
// })