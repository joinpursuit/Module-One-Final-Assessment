/**

* Determines whether or not a number is odd.

* @param {number} n - The input number.
* @returns {boolean} - True if n is odd, false if n is even, or not a number.

*/

const isOdd = n => {
    if(n % 2 === 0){
        return false;
    } else if(isNaN(n)) {
        return false;
    } else {
        return true;
    }
}

module.exports = isOdd
