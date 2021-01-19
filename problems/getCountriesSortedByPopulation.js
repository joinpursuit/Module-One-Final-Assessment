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
//takes in an array of objects
//and returns sorted by population value. (possibly using .sort)
let ex1 = [
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
  ]

  let ex2 = [
    {
      country: "Argentina",
      population: 58,
    },
    {
      country: "Egypt",
      population: 145,
    },
    {
      country: "Russia",
      population: 1386,
    },
    {
      country: "New Zealand",
      population: 66,
    },
  ]

function getCountriesSortedByPopulation(arr) {

    let sorted = [Object.values(arr)]
    sorted.sort(function(a,b) {
        return b-a
    })
return sorted
}


module.exports = getCountriesSortedByPopulation

console.log(getCountriesSortedByPopulation(ex1))
