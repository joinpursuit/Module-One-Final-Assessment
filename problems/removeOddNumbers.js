/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(!(arr[i]%2==0)){
            arr.splice(i, 1);
        }
    }
    return arr;
}

module.exports = removeOddNumbers