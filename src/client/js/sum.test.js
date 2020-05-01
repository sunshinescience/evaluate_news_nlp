// Getting started docs: https://jestjs.io/docs/en/getting-started.html
// In the console, run: npm run test1

// Write the test
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
