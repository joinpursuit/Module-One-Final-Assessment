/**

* Determines whether or not a number is odd.

* @param {number} n - The input number.
* @returns {boolean} - True if n is odd, false if n is even, or not a number.

*/

const isOdd = (n) => {  
    if(n % 2 === 1){
        return true 
    }else if(n !== "number" || n % 2 === 0){
        return false
      }
}

module.exports = isOdd
