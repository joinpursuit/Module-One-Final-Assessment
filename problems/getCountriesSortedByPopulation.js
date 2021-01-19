/**

* Returns an array of country names sorted in descending order by population (biggest to smallest)
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order (biggest to smallest)
* 
* ex: getCountriesSortedByPopulation([ { country: "Denmark", population: 6 }, { country: "China", population: 1386 }, { country: "Egypt", population: 145 }])
* returns: ["China", "Egypt", "Denmark"]
* 
*/

function getCountriesSortedByPopulation(arr) {
arr.sort(function (a,b) {
    return a.population - b.population
    let myObject = Object.population(arr)

}) return myObject

// let newArray= arr.sort((p1, p2) => {
//   return  p2.population - p1.population
//   console.log(newArray)
// })
// console.log(newArray)
// // return newArray
}


module.exports = getCountriesSortedByPopulation
