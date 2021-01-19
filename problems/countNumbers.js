
/** 
 * Count all the numbers in an array
 * 
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is the number, and the value is the count of that number
 * 
 * ex: countNumbers([1,1,1,2,2,3,4]) 
 * returns { 1:3, 2:2, 3:1, 4:1 }
 * 
 * ex: countNumbers([99, 99, 11, 12, 13, 58])
 * returns { 99: 2, 11: 1, 12: 1, 13: 1, 58: 1 }
 */

function countNumbers(arr) {
    newObj = {}
    for (let element of arr) {
        newObj[element] = 0
    }
    for (element of arr) {
        newObj[element]++
    }
    return newObj
}

console.log(countNumbers([1, 2, 3, 4, 5, 6]))

module.exports = countNumbers