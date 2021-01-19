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

function getCountriesSortedByPopulation(arr) {
    let newArray = []
 let order = arr.sort((a,b)=>{
     return b.population - a.population
 })
 for(let i=0;i<order.length;i++){
     newArray.push(order[i]['country'])
 }
return newArray
}

module.exports = getCountriesSortedByPopulation
