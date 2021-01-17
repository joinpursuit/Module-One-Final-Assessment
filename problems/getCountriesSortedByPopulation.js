/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/
const getCountriesSortedByPopulation = (arr) => {
  return arr
    .sort((a, b) => {
      return a.population - b.population;
    })
    .reverse()
    .map((objCountry) => {
      return (objCountry = objCountry.country);
    });
};

// console.log(getCountriesSortedByPopulation([
//     {
//       country: "Algeria",
//       population: 41,
//     },
//     {
//       country: "Belize",
//       population: 0.4,
//     },
//     {
//       country: "China",
//       population: 1386,
//     },
//     {
//       country: "Denmark",
//       population: 6,
//     },
//   ]))

module.exports = getCountriesSortedByPopulation;
