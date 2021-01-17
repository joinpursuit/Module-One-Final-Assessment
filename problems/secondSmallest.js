/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
    let smallest= +Infinity
    let secondsmallest = +Infinity
    arr.forEach((num) => {
        if( num < smallest){
            secondsmallest = smallest
            smallest = num
        }else if(num < secondsmallest){
            secondsmallest = num
        }
    })
    return secondsmallest    
}

module.exports = secondSmallest
