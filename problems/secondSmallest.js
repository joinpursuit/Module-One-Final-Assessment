/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

//function secondSmallest() {}

const secondSmallest = (arr) => {
	let smallest = Infinity;
	let secondSmallest = Infinity;

	for (const element of arr) {
		if (element < smallest) {
			secondSmallest = smallest;
			smallest = element;
		} else if (element < secondSmallest) {
			secondSmallest = element;
		}
	}
	return secondSmallest;
};

module.exports = secondSmallest;
