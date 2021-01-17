/** Remove all odd numbers from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - The input array with all odd number removed
 * [1, 2, 3, 4, 5, 6, 7, 8, 9] >> [2, 4, 6, 8]
 */
//function removeOddNumbers() {}

const removeOddNumbers = (arr) => {
	evenArr = [];
	arr.forEach((num) => {
		if (num % 2 === 0) {
			evenArr.push(num);
		}
	});
	return evenArr;
};

module.exports = removeOddNumbers;
