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

function smallest(array) {

 //initalize array   
let arr = [1, 0, 4, 80, 5, 6]

//Iterate over all elments in the array  
for(i = 0; i < arr.length; i++) { //Iterate over all elments in the array 
   return Math.min(...array); //Use math.min to find the smallest in array source: https://www.w3schools.com/jsref/jsref_min.asp
}

}


module.exports = smallest
