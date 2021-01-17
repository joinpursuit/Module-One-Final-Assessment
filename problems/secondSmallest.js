/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
    let smallest = Infinity
     let secondSmall = Infinity
 arr.forEach(el => {
     if(el < smallest) {
         secondSmall = smallest;
         smallest = el
     } else if(el < secondSmall) {
         secondSmall = el
     }
 })
 return secondSmall
}

module.exports = secondSmallest
