/*

* Complete the class implementation below for Day.
* Day should have two properties:
*     - temperature: number
*     - weather: string
* Day should have one method "getDescription"
* getDescription returns a string in the format: "It is {temperature} degrees and {weather}"

*/


class Day {
  constructor(temperature, weather) {
    this.temperature = temperature
    this.weather = weather
  }
  getDescription() {
    return `It is ${this.temperature} degrees and ${this.weather}`
  }
}

/**

* Takes in an array of Day objects and returns an array of their descriptions.  Use a higher-ordered function (e.g map, filter, reduce, every, sort) in your implementation.

* @param {Day[]} days - The input array of days
* @returns {string[]} - The description of each day

*/

function getAllDayDescriptions(days) {
    return days.map((day) => day.getDescription())
}


module.exports = {
  Day: Day,
  getAllDayDescriptions: getAllDayDescriptions
}
