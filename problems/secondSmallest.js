/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
    let arr1 = 99;
    let arr2 = 99;

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
