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

// takes in an array with objects holding a country as key and it's population number as value
// need to return country names with lowest to highest population
// will sort population number from highest to lowest
// will access the property values with arr.country
// 
function getCountriesSortedByPopulation(arr) {
  arr.sort((a, b) => {
    return b.population - a.population
  });
  let arrCountries = []
  for (let element of arr) {
    arrCountries.push(element["country"])
  }
  return arrCountries
}
  

console.log(getCountriesSortedByPopulation([
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
  ]))

module.exports = getCountriesSortedByPopulation
