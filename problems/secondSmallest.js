/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/
const secondSmallest = arr => {
    if(nums.length < 2) return null
      let firstSmallest = -1
       let theNumberAfterFirstSmallest = -1

    nums.forEach((num) => {
		if(num > firstSmallest){
			firstSmallest = num;
		}else if(num > theNumberAfterFirstSmallest){
			theNumberAfterFirstSmallest = num
		}else if(num = theNumberAfterFirstSmallest){
			theNumberAfterFirstSmallest = num
		}
		return theNumberAfterFirstSmallest;
	})
}


module.exports = secondSmallest
