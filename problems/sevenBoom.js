/** Write a function that returns all the values from 1 to n inclusive, replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
 * Sample Input: 20
 * Sample Output: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
 * @param {number} n - The number to count up to
 * @returns {number[]} - An array matching the pattern described above
 */
function sevenBoom(n) {
  num = 1;
  newArray = [];
  while (num <= n) {
    if (num % 7 === 0) {
      newArray.push("BOOM");
      num++;
    } else if (num.toString().includes("7")) {
      newArray.push("BOOM");
      num++
    } else {
      newArray.push(num);
      num++
    }
  }
//   console.log(newArray)
  return newArray;
}
module.exports = sevenBoom;
