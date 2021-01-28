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

// i = 0
// arr[i] = 3     // small = 3
// i = 1
// arr[i] = 0     // small = 0

function smallest(arr) {
let smallNumber = arr[0]
for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallNumber){
      smallNumber = arr[i]
    }
   
}
return smallNumber
}

module.exports = smallest

