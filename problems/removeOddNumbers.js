/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers() {
    let arr = []
    for(let i = 0; arr.length; i = i++)
    if(i % 2 == 0) {
        arr.splice(i, 0);
    }
}

module.exports = removeOddNumbers