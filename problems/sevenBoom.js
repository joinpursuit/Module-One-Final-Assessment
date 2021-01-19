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
    let newArray = []
    for (let i = 1; i <= n; i++) {
        let stringNumber = i.toString()
        if ((i % 7 === 0) || (stringNumber.includes('7'))) {
            newArray.push('BOOM')
        }
        else {
            newArray.push(i)
        }
    }
    return newArray
}

module.exports = sevenBoom