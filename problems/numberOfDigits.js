/**CC WEB Used Website https://www.tutorialspoint.com/how-to-count-digits-of-given-number-javascript

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits (num, count = 0) {
    if (num){
    return numberOfDigits(Math.floor(num / 10), ++count);{   
    }
 }
return count;
}


module.exports = numberOfDigits
