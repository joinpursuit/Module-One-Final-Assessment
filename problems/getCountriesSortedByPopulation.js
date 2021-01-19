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

const getCountriesSortedByPopulation = (arr) => {
     arr.sort((a, b) => {
           return a.population - b.population;
    });
    return arr.map((a) => {
        return arr.country;
    });
  
};

module.exports = getCountriesSortedByPopulation
