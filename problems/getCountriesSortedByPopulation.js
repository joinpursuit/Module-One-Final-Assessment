/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

let ex1 = [
    {
      country: "Algeria",
      population: 41,
    },
    {
      country: "Belize",
      population: 0.4,
    },
    {
      country: "China",
      population: 1386,
    },
    {
      country: "Denmark",
      population: 6,
    },
  ]

function getCountriesSortedByPopulation(arr) {
    let sortedArr = arr.sort((a, b) => b.population - a.population)
    
    return sortedArr
}

console.log(getCountriesSortedByPopulation(ex1))

module.exports = getCountriesSortedByPopulation
