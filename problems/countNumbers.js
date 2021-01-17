
/** 
 * Count all the numbers in an array
 * 
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is the number, and the value is the count of that number
 * 
 * ex: countNumbers([1,1,1,2,2,3,4]) 
 * returns { 1:3, 2:2, 3:1, 4:1 }
 */

const countNumbers = (arr) => {
 let count = {};
 for (let i = 0; i < arr.length; i++) {
     const el = arr[i];
     if (count[el]) {
         count[el] += 1;
     } else {
         count[el] = 1;
     }
 }
 return count
}

module.exports = countNumbers