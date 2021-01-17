
/** 
 * Count all the numbers in an array
 * 
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is the number, and the value is the count of that number
 * 
 * ex: countNumbers([1,1,1,2,2,3,4]) 
 * returns { 1:3, 2:2, 3:1, 4:1 }
 */
//Object.keys(array).length:
const countNumbers = (arr) => {
    let newArr = arr
    let countObj = {}
    newArr.map((el) => {
        if(countObj[el]){
            countObj[el]++
        }else{
            countObj[el] = 1
        }
    })
    return countObj;
}
    



module.exports = countNumbers