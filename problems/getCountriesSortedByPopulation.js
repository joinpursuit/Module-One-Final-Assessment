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

function getCountriesSortedByPopulation() {
  
    let countries = [
    {
      nameCountry: "China",
      population: 60000000,
    },
    {
      nameCountry: "Algeria",
      population: 30000000,
    },
    {
      nameCountry: "Demark",
      population: 50000000,
    },
    {
      nameCountry: "Eygpt",
      population: 120000000,
    },
  ];

countries.sort(function(a,b){return b-a});
return countries

}



module.exports = getCountriesSortedByPopulation;
