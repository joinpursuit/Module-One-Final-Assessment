/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

const getCountriesSortedByPopulation = (arr) => {
    return arr.sort ((a, b) => {
        return Math.floor(b.population - a.population);
    })
    .map((arr) => {
        return arr.country;
    })
};


module.exports = getCountriesSortedByPopulation
