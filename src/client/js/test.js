//import { validUrl } from './formHandler.js'
import { handleSubmit, updateUI, updateURL } from './formHandler'



/*
test('adummy', () => {
  expect(1).toBe(1);
});
*/

test('there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('there is a "require" in validUrl', () => {
  expect('validUrl').toMatch(/Url/);
});

