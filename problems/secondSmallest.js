/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

const secondSmallest = (arr) => {
    let firstSmall = arr[0]
    let secondSmall = arr[1]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < firstSmall) {
            secondSmall = firstSmall
            firstSmall = arr[i]
        } else if (arr[i] < secondSmall) {
            secondSmall =arr[i]
        }
    }
  return secondSmall
}

module.exports = secondSmallest
