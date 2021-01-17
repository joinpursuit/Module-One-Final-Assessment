/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
const removeOddNumbers = (arr) => {
    let output = []
     arr.forEach((num) => {
        if(num % 2 === 0){
          output.push(num) 
        }
        })
        return output
    }


module.exports = removeOddNumbers