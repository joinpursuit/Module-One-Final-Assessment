/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

function getCountriesSortedByPopulation(arr) {
    arr.sort((count1, count2) =>{
        return count2.population - count1.population;
    })
    return arr.map((arr) =>{
        return arr.country
    })
    // return arr.sort((count1, country2) => count2.population - count1.population).map(arr => arr.country)
}
module.exports = getCountriesSortedByPopulation
