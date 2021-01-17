/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

function getCountriesSortedByPopulation(arr) {
    return arr.sort((country1, country2) => {
        console.log(arr);
        if (country2.population > country1.population) {
            console.log(arr)
        }
        return Math.floor(country2.population - country1.population)
    })


}


module.exports = getCountriesSortedByPopulation
