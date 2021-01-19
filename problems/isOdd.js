/**

* Determines whether or not a number is odd.

* @param {number} n - The input number.
* @returns {boolean} - True if n is odd,
 false if n is even.
*
* ex: isOdd(4); // false
* ex: isOdd(75); // true
*/
let n = 4;
function isOdd(n){
    if(n %2 === 1){
        console.log(true)
        return true 
    }else {
        console.log(true)
        return false
    }
    }
//console.log(isOdd);


module.exports = isOdd
