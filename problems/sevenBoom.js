/** Write a function that returns all the values from 1 to n inclusive, replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
* Sample Input: 20
* Sample Output: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
* @param {number} n - The number to count up to
* @returns {number[]} - An array matching the pattern described above
*/
function sevenBoom(n) {
    let arr = []
    let num = 1
    let str = num.toString()
    while(num <= n){
        if (num % 7 === 0){
            arr.push("BOOM");
            }else if (str[1]=== "7"){
        // }else if (str.includes("7")){
            // }else if  ((str.split("")===typeof "7")){   
                //else if should split number string and check for integer 7 and then string should be joined back)
            arr.push("BOOM") 
        }else{ 
            arr.push(num);
             }
            i+=1
         }
        return arr
        }
    



module.exports = sevenBoom