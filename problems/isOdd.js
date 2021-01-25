/**

* Determines whether or not a number is odd.

* @param {number} n - The input number.
* @returns {boolean} - True if n is odd, false if n is even.
*
* ex: isOdd(4); // false
* ex: isOdd(75); // true
*/

function isOdd(n) {
if (n %2 === 0){
    return false
}
else{
    return true
}
}

module.exports = isOdd
