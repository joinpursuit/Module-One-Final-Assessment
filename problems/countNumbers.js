
/** 
 * Count all the numbers in an array
 * 
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is the number, and the value is the count of that number
 * 
 * ex: countNumbers([1,1,1,2,2,3,4]) 
 * returns { 1:3, 2:2, 3:1, 4:1 }
 */

const countNumbers = arr => {
    let obj = {}
    let count = 0
    for (let key of arr) {
        obj[key] = 0
        if(obj[key]) {
            obj[key] +=1
        } else {
            obj[key] =1
        }
    }
    return obj
}
console.log(countNumbers([1,1,1,2,2,3,4]))

// let obj = {}
// let key
// for (let i = 0; i < arr.length; i++) {
//     let el = key
//     if(obj[el]) {
//         obj[el] +=1
//     } else {
//         obj[el] =1
//     }
// }
// return obj
// }

module.exports = countNumbers