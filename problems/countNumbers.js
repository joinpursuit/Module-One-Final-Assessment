/**
 * Count all the numbers in an array
 *
 * @param {number[]} arr - An array containing numbers
 * @returns {object} - an object where the key is the number, and the value is the count of that number
 *
 * ex: countNumbers([1,1,1,2,2,3,4])
 * returns { 1:3, 2:2, 3:1, 4:1 }
 */

//function countNumbers() {}

const countNumbers = (arr) => {
	let numObj = {};
	// get the count of each key
	// assign the value to the key
	for (const num of arr) {
		if (numObj[num]) {
			numObj[num]++;
		} else {
			numObj[num] = 1;
		}
	}
	return numObj;
};

module.exports = countNumbers;


