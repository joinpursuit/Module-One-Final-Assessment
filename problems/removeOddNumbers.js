const removeNumbersAtOddIndices = require("./removeNumbersAtOddIndices")

/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    return arr.filter((number)=>{
        if(number%2 === 0){
            return number 
        }
    })
}
console.log(removeOddNumbers([
    808,
    814,
    174,
    98,
    632,
    970,
    0,
    554,
    608,
    330,
    90,
    976,
    806,
    464,
    786,
    590,
    898,
    272,
    812,
    52,
    388,
    574,
    262,
    698,
    48,
  ]))

module.exports = removeOddNumbers