const removeNumbersAtOddIndices = require("./removeNumbersAtOddIndices")

/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    return arr.filter((num)=>{
        if (num % 2=== 0){
            return num
        }
    })
}

console.log(removeOddNumbers([0,1,2,4]))
//     return arr.filter((number)=>{
//         if (number === 0 || number % 2=== 0){
//             return number 
//         }
//     })
// }




module.exports = removeOddNumbers