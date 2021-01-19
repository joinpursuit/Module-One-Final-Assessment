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
    
    let smallestNum = arr[0]               // create a new variable to store smallest number
                                           // set smallest number to array at index zero (for starting point)

    
    for(let i = 0; i <= arr.length - 1; i++)  // create a loop to iterate through array of numbers
      if(arr[i] < smallestNum)                // if the number at index is smaller than smallest number
        smallestNum = arr[i]                  // that will become our new smallest number
    return smallestNum                        
}

console.log(smallest([3, 0]))
console.log(smallest([1, 1, 2]))

module.exports = smallest
