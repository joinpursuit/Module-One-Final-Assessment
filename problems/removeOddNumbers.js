/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    let newArr = []
    arr.filter((num) => {
        if (num % 2 === 0){
            newArr.push(num)
        }
    })
    return newArr

}

module.exports = removeOddNumbers