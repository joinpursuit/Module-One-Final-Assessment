
/** 
 * Count all the numbers in an array
 * 
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is the number, and the value is the count of that number
 * 
 * ex: countNumbers([1,1,1,2,2,3,4]) 
 * returns { 1:3, 2:2, 3:1, 4:1 }
 */

function countNumbers(arr) {
 let obj = {};
 arr.forEach((el)=> {
     if(obj[el]){
         obj[el]+= 1  
     } else {
         obj[el] = 1
     }
 })
 return obj
}
console.log(countNumbers([1,1,1,2,2,3,4]));

module.exports = countNumbers
// console.log(obj[el])