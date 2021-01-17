const numberOfDigits = require("./numberOfDigits")
const removeOddNumbers = require("./removeOddNumbers")

/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    return arr.map((number, i)=>{
        return i % 2 === 0 ? number : false 
    }).filter(number =>{
        return number !== false 
    })
}
// filter alone would not pass the value of '0' becasue its a falsy value, nice one team
module.exports = removeNumbersAtOddIndices