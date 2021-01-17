/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

const countNumbers = require("./countNumbers")

function getCountriesSortedByPopulation(arr) {
   return arr
   .sort((a1,a2) => {
      return a2.population - a1.population
    })
    .map((a) => {
        return a.country
    })
}


module.exports = getCountriesSortedByPopulation
