/** Takes an array of numbers and returns a new array.
* The returned array contains only the even numbers from the input array,
* with no odd numbers.
* 
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*
* ex: removeOddNumbers([3, 5, 7, 2, 4, 9, 11, 6]);
* returns: [2, 4, 6]
*
* ex: removeOddNumbers([1, 3, 5])
* returns: []
*
* ex: removeOddNumbers([2, 4, 6])
* returns: [2, 4, 6]
*/
function removeOddNumbers(arr) {
  let newArr = [];

  for (let i =0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
     newArr.push(arr[i])
    }
  }
  return newArr
}

module.exports = removeOddNumbers