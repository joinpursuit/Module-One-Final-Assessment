const smallest = require("../problems/smallest.js")

describe("smallest", () => {
  test("Returns a number", () => {
    expect(typeof smallest([5, 1, 4, 5, 3])).toBe("number")
  })
  test("Returns the second smallest number", () => {
    expect(smallest([5, 1, 4, 2, 5, 6])).toBe(1)
    expect(smallest([1, 10, 7, 90, 5, -4])).toBe(-4)
    expect(smallest([2, 0, 4, 90, 5, 6])).toBe(0)
    expect(smallest([11, 3, 4, 90, 5, 6])).toBe(3)
  })
})
