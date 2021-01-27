// // // function countNumbers(arr) {
// // //     for (let i = 0; i < arr.length; i++) {
// // //         let iter = arr[i];
// // //         console.log(iter);
// // //         // return arr[i]
// // //     }
// // // }
// // // let nums = [8,1,1,2,6,8,8,2,8]
// // // console.log(countNumbers(nums))


// // // const intersection = nums.filter(element => nums.indexOf(element) !== -1)
// // // console.log(intersection)


// // // function getCountriesSortedByPopulation(arr) {
// // //     arr.sort((a,b) => {
// // //         return  b.population - a.population 
// // //     })
// // //     for (let i = 0; i < arr.length-1; i++) {
// // //         arr[i] = Object.keys(arr)
// // //         console.log(arr)
// // //     }
// // //    return arr
// // // }
// // // let countryObj = [ { country: "Denmark", population: 6 }, { country:"China", population: 1386 }, { country: "Egypt", population: 145 }]
// // // console.log(getCountriesSortedByPopulation(countryObj))


// // function removeNumbersAtOddIndices(arr) {
// //     let oddIndx = []
// //     for (let i = 0; i < arr.length - 1; i+=2){
// //         oddIndx.push(arr[i]+1);
// //     }
// //     console.log(oddIndx)
// //     return oddIndx
// // }
// // console.log(removeNumbersAtOddIndices([5, 4, 3, 2, 1]))
// // console.log(removeNumbersAtOddIndices([1,2,3,4,5]))

// function removeOddNumbers(arr) {
//     let oddNums = arr.filter((indx)=>arr[indx%2!==0])
// }
// console.log(removeOddNumbers([1,2,3,4,5,6,87]))


















function removeVowels(string) {
    const isItAVowel = (character) => {
        let vowels = 'aeiou'.split('')
        for (let i = 0; i < vowels.length; i++) {
            if (character.toLowerCase() === vowels[i]) {
                return true;
            }
        }
        return false;
    }
    let neuStr = '';
    for (let i = 0; i < string.length; i++) {
        if (!isItAVowel(string[i])) {
            neuStr += string[i]
            console.log(neuStr)
        }
    }
    return neuStr
}
console.log(removeVowels('Hello'))
console.log(removeVowels('quic  ky'))