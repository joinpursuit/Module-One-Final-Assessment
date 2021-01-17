
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
    let counter = {};
    for (let i = 0; i < arr.length; i++) { // 
        const el = arr[i]; // used to move through array
        if (counter[el]) { // cheking to see if the key is in counter if there is a key present then increment
            counter[el] += 1 // counter[el] = counter[el] + 1
        } else {
            counter[el] = 1; // if no key is in counter else assigns a key in counter
        } 
    }
    return counter;
}

// console.log(countNumbers([1,1,1,2,2,3,4]))


module.exports = countNumbers
