/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
    let smallest = Infinity
    let secondSmallest = Infinity
    
    for (let i = 0; i< arr.length; i++){
        if(arr[i]<smallest){
            secondSmallest = smallest
            smallest = arr[i]
        } else if (arr[i] < secondSmallest){
            secondSmallest = arr[i]
        }
    }
  return secondSmallest
}

module.exports = secondSmallest
