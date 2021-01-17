/** CC from Vid and Web Source

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

function getCountriesSortedByPopulation(array) {
        let newArray = [];
        for (let i = arr.length - 1; i >= 0; i--) {
          newArray.push(arr[i]);
        }
        return newArray;
      }
}

module.exports = getCountriesSortedByPopulation
