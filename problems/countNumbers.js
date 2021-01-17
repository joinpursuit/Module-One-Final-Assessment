
/** 
 * Count all the numbers in an array
 * 
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is the number, and the value is the count of that number
 * 
 * ex: countNumbers([1,1,1,2,2,3,4]) 
 * returns { 1:3, 2:2, 3:1, 4:1 }
 */

const countNumbers = (arr) => {
    let obj = [];
      arr.forEach((number) => {
          if(obj[number]){
              obj[number] += 1;
          }else {
              obj[number] = 1;
          }
      });

    return obj;
}


module.exports = countNumbers