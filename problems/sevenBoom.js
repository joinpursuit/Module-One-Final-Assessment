/** Write a function that returns all the values from 1 to n inclusive, replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
*
* @param {number} n - The number to count up to
* @returns {number[]} - An array matching the pattern described above
*
* ex: sevenBoom(20)
* returns: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
* Notice:
* 7 is replaced with 'BOOM' because it is a multiple of 7 (7 * 1 = 7) AND it contains a 7.
* 14 is replaced with 'BOOM' because it is a multiple of 7 (7 * 2 = 14)
* 17 is also replaced with 'BOOM' because it contains a 7.
*/

function sevenBoom(n) {
for(let i = 0; i >= 20; i++) {
    if (n % 7 === 0) {
    return "boom"
    } else {
        return n
    }
}

}

console.log(sevenBoom(20))
module.exports = sevenBoom