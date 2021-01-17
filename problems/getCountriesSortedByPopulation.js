/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

function getCountriesSortedByPopulation(arr) {
    return arr.sort((countryA,countryB)=>{
        return countryB.population -countryA.population
    }).map((element)=> element["country"])
   // }).map((element) =>{ return  element["country"]})
}

module.exports = getCountriesSortedByPopulation
