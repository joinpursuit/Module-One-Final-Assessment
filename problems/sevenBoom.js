/** Write a function that returns all the values from 1 to n inclusive, replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
* Sample Input: 20
* Sample Output: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
* @param {number} n - The number to count up to
* @returns {number[]} - An array matching the pattern described above
*/

const sevenBoom = n => {
    let sevenArray = []
    for (let i = 1; i <= n; i++) {
        let iString = i.toString()
        if (i % 7 === 0 || iString.includes(7)) {
            sevenArray.push("BOOM")
            console.log(sevenArray)
        // } else if (sevenArray.includes(7)) {
        //     sevenArray.push("BOOM")
        //     console.log(sevenArray)
        } else {
            sevenArray.push(i)
            console.log(sevenArray)
        }
    }
    return sevenArray
}



module.exports = sevenBoom