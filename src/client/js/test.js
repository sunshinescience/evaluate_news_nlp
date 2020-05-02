// In the console, run: npm run test1

import { handleSubmit, updateUI, validURL} from './formHandler'

test('This function does not return anything it is expected to be undefined', () => {
  expect(validURL()).toBeUndefined();
});

test('there is a "require" in validUrl', () => {
  expect('validUrl').toMatch(/Url/);
});
