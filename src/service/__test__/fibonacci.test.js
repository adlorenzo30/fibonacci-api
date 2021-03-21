const each = require("jest-each").default;
const fibonacci = require("../fibonacci");

each([
  [1, 1],
  [1, 2],
  [2, 3],
  [8, 6],
]).test("should return %d when index is %d", async (value, index) => {
  const result = fibonacci(index);

  expect(result).toBe(value);
});
