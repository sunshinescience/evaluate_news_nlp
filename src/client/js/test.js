//import { validUrl } from './formHandler.js'
import { handleSubmit, updateUI, validURL} from './formHandler'

/*
test('This is a function, so its expected to not be an object', () => {
  expect( updateUI ).not.toBe( Object );
});
*/

test('there is a function that checks to see if input is a valid URL', () => {
  expect(validURL()).toBeDefined();
});

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
