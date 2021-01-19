
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
//create an object that stores the numbers in an array as keys and the amount of times it appaears in the array as values 
// iterate through the array and if element has been seen before +1 on the value
// if not see before the value = 1 
function countNumbers(arr) {
let obj = {}
for(let num of arr){
    if(obj[num]){
        obj[num] += 1
    } else if(obj[num] === undefined){
        obj[num] = 1
    }
}
return obj 
}

console.log(countNumbers([1, 2, 3, 4, 5, 6]))


module.exports = countNumbers