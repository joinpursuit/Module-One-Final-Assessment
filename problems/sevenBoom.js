/** Write a function that returns all the values from 1 to n inclusive,
 * replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
 * Sample Input: 20
 * Sample Output: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
 * @param {number} n - The number to count up to
 * @returns {number[]} - An array matching the pattern described above
 */
//function sevenBoom() {}
// i = 1
// multiple of seven >>> i % 7 === 0
// ends in 7 >>> i % 10 === 7  
// contain seven >>> .includes(7) but would have to turn the number into a string first check then trun back into a number ?
// contains 7 would start @ i > 69 >> 


const sevenBoom = (n) => {
	let sevenArr = [];
	for (let i = 1; i <= n; i++) {
		if (i % 7 === 0) { 
			sevenArr.push("BOOM");
		} else if (i % 10 === 7) {
			sevenArr.push("BOOM");
		} else {
			sevenArr.push(i);
		}
	}
	return sevenArr;
};

module.exports = sevenBoom;
