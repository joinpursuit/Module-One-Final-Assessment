/**

* Returns an array of country names sorted in 
descending order by population (biggest to smallest)
* 
* @param {object[]} arr - The input array. Objects will be in the 
form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted
 by their population in descending order (biggest to smallest)
* 
* ex: getCountriesSortedByPopulation([ { country: "Denmark", 
//population: 6 }, { country: "China", population: 1386 },
 { country: "Egypt", population: 145 }])
* returns: ["China", "Egypt", "Denmark"]
* 
*/
let countryPopulations = [
{country: 'Egypt', population: 60},
{country: 'Denmark', population: 40},
{country: 'China', population: 80} 
];
//function getCountriesSortedByPopulation(a, b) {
    countryPopulations.sort(function (a, b) {
        return b.population - a.population;
        //should return ['China', 'Egypt', 'Denmark'] only from the object??????!!!
    });
    console.log(countryPopulations)
        
    // let country = countryPopulations.map
    // console.log(country)

//module.exports = getCountriesSortedByPopulation
