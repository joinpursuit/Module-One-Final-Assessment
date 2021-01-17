/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

function getCountriesSortedByPopulation(arr) {
  newArray = [];

  newObject = arr.sort((a, b) => b.population - a.population);
  newArray = arr.map((a) => a.country);
  console.log(newArray);
  return newArray;
}
module.exports = getCountriesSortedByPopulation;
