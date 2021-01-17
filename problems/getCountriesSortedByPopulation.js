/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

function getCountriesSortedByPopulation(arr) {
    return arr.sort((firstCountry, secondCountry) => {
        return secondCountry["population"] - firstCountry["population"]
    }).map((countries) => {
        return countries.country
    })
}

// console.log(getCountriesSortedByPopulation([
//     {
//       country: "Algeria",
//       population: 41,
//     },
//     {
//       country: "Belize",
//       population: 0.4,
//     },
//     {
//       country: "China",
//       population: 1386,
//     },
//     {
//       country: "Denmark",
//       population: 6,
//     },
//   ])
// )
module.exports = getCountriesSortedByPopulation


// function sortPeopleByAge(people) { // sort - mutates the original array
//     return people.sort((keyNameFirst, keyNameSecond) => { 
//       return keyNameFirst["age"] - keyNameSecond["age"] // or keyNameFirst.age 
//     })
//   }