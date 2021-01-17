/** Write a function that returns all the values from 1 to n inclusive, replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
 * Sample Input: 20
 * Sample Output: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
 * @param {number} n - The number to count up to
 * @returns {number[]} - An array matching the pattern described above
 */
function sevenBoom(n) {
  let output = [];
  let numStr = n.toString();
  for (let i = 0; i <= n; i++) {
    output.push(i += 1);
  }
    if (i % 7 === 0 && numStr.includes("7")) {
      output.push("BOOM");
    
  }
  return output;
}

let output = [];
output.forEach(element => {
    
});

module.exports = sevenBoom;
