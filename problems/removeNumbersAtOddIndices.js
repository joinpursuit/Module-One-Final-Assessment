/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
    let newArr= arr.map((num,i)=>{
        if(i%2===0){
            return num
        }
    })
    return newArr.filter((num)=> {
        if(num !== 0){
            return num
        } 
    })
    }

//     return arr.filter((number, i)=>{
//         if(i % 2 === 0 ){
//             return number 
//         }else if (number === 0){
//             return false
//         }
//     })
// }

module.exports = removeNumbersAtOddIndices