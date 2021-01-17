/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/
//rerurn an array of the names of the countries in the decsecding order of each population 
//we input an arr and the objects are in the form of country :population 
//we return an array of the country names 

const getCountriesSortedByPopulation = (arr) => {
    arr.sort((country1, country2) => {
    return (country2.population - country1.population);
    console.log(arr)
})
return arr.map((arr) => {
    return arr.country
})

}
 


module.exports = getCountriesSortedByPopulation
