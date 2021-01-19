
/** 
 * Count all the numbers in an array *CC
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
        let counter = {};
        for(let i = 0; i < arr.length; i++) {
            const el = arr[i];
            if(counter[el]) {
                counter[el] += 1;
            } else {
                counter[el] = 1;
            }
        }
        return counter; 
    }

module.exports = countNumbers