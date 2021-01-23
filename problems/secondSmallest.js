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


    let arr1 = Infinity;
    let arr2 = Infinity;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (num < arr1) {
            arr2 = arr1
            arr1 = num
        } else if (num < arr2) {
            arr2 = num

        }
    }
    return arr2

}

module.exports = secondSmallest
