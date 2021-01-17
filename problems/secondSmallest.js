/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
  smallest = Infinity;
  secSmallest = Infinity;
  arr.forEach((el) => {
    let num = el;
    if (num < smallest) {
      secSmallest = smallest;
      smallest = num;

      //   console.log("This is the smallest: " + smallest);
    } else if (num < secSmallest) {
      secSmallest = num;

      //   console.log("This is the 2nd smallest: " + secSmallest);
    }
  });

  return secSmallest;
}

module.exports = secondSmallest;
