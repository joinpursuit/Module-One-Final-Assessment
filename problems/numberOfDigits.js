/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/

function numberOfDigits(n) {
    let num = n
    return Math.floor(num.toString().length)
}

// let count = 0;
// for (let i = 0; i < n; i++) {
//     const count = n;
//     console.log(typeof count + "first")
//     if (typeof el === number ) {
//         count += 1;
//         console.log(typeof el + "second")
//     } else {
//         count = 1;
//         console.log(count + "third")
//     }
//     console.log(count[el])
//     return count;
// }




module.exports = numberOfDigits
