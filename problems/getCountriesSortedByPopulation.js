/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

const getCountriesSortedByPopulation = (arr) => {
     arr.sort((a, b) => {
           return a.population - b.population;
    });
    return arr.map((a) => {
        return arr.country;
    });
  
};

module.exports = getCountriesSortedByPopulation
