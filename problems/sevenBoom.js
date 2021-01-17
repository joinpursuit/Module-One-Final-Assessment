/** Write a function that returns all the values from 1 to n inclusive, replacing all
 * numbers that are a multiple of seven, or contain seven with "BOOM".
 * Sample Input: 20
 * Sample Output: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
 * @param {number} num - The number to count up to
 * @returns {number[]} - An array matching the pattern described above
 */
function sevenBoom(num) {
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 7 === 0) {
      newArr.push("BOOM");
    } else if (i.toString().includes("7")) {
      newArr.push("BOOM");
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

module.exports = sevenBoom;
