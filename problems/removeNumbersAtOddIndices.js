/** Remove all numbers at odd indices from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - An array removing all elements initially appearing at an odd index
 */
//function removeNumbersAtOddIndices() {}
//[1, 2, 3, 4, 5, 6, 7, 8, 9]; >>> [1, 3, 5, 7, 9,]
// for in loop gives the index

const removeNumbersAtOddIndices = (arr) => {
	let oddsArr = [];
	for (const num in arr) {
		if (num % 2 === 0) {
			oddsArr.push(arr[num]);
		}
    }
    return oddsArr;
};

module.exports = removeNumbersAtOddIndices;
