
/** 
 * Count all the numbers in an array
 * 
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is 
 * the number, and the value is the count of that number
 * 
 * ex: countNumbers([1,1,1,2,2,3,4]) 
 * returns { 1:3, 2:2, 3:1, 4:1 }
 * 
 * ex: countNumbers([99, 99, 11, 12, 13, 58])
 * returns { 99: 2, 11: 1, 12: 1, 13: 1, 58: 1 }
 */

// function countNumbers() {
 
// }



let arr = [1,1,1,2,2,3,4]
//function countNumbers(arr) {
let countNumbers = { };
for (let i = 0; i < arr.length; i++) {
    value = arr[i]
   if (typeof countNumbers[value] === "undefined") {
    countNumbers[value] = 1;
   }else{
    countNumbers[value]++;
   }
}
console.log(countNumbers);

//}

let arr2 = [99, 99, 11, 12, 13, 58]
//function countNumbers() {
let countNumbers2 = { };
for (let i = 0; i < arr2.length; i++) {
    value2 = arr2[i]
   if (typeof countNumbers2[value2] === "undefined") {
    countNumbers2[value2] = 1;
   }else{
    countNumbers2[value2]++;
   }
}
console.log(countNumbers2);



module.exports = countNumbers