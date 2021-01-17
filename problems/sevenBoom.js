/** Write a function that returns all the values from 1 to n inclusive, replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
 * Sample Input: 20
 * Sample Output: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
 * @param {number} n - The number to count up to
 * @returns {number[]} - An array matching the pattern described above
 */
const sevenBoom = (n) => {
  let boomArray = [];
  for (let i = 1; i <= n; i++) {
    if (i.toString().includes("7") || i % 7 === 0) {
      boomArray.push("BOOM");
    } else {
      boomArray.push(i);
    }
  }
  return boomArray;
};
//console.log(sevenBoom(29));

module.exports = sevenBoom;
