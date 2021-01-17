/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

const secondSmallest = nums => {
    let smallMax = Infinity;
    let small2ndMax = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (smallMax < nums[i] ) {
            smallMax = nums[i];
            small2ndMax = nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < smallMax)
        smallMax = nums[i]
        }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > smallMax && nums[i] < small2ndMax)
        small2ndMax = nums[i];
        }
    return small2ndMax;
}

module.exports = secondSmallest
