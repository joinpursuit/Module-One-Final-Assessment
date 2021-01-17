/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallestNum = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]< smallest){
            secondSmallestNum = smallest
            smallest = arr[i]
        }else if ( arr[i]< secondSmallestNum){
            secondSmallestNum = arr[i]
        }
    }
    return secondSmallestNum; 
}

module.exports = secondSmallest
