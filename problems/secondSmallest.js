/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {


    // if (arr.length < 2) {
    //     return null;
    // }
    // arr.sort((a, b) => a - b)
    // return arr[1];


    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (num < smallest) {
            secondSmallest = smallest
            smallest = num
        } else if (num < secondSmallest) {
            secondSmallest = num

        }
    }
    return secondSmallest;

}

module.exports = secondSmallest
