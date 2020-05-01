/*
var dataInfo = require('./formHandler')
const validateText = dataInfo.updateURL;
*/
import { valURL } from './formHandler'

test('this should be a string ', () => {
  expect( typeof valURL ).toBe( 'string' )
});

//var requestObject = require('./index')
//var validateRequest = requestObject.aylienData;

/*
import { updateUI } from './formHandler'


let o = {
    method() { ... }
  }

expect( o.method ).toBeInstanceOf( Function )

result = updateUI();
console.log("result", result);
//expect( typeof result ).toBe( 'object' )

export {
  updateUI
}
*/

/*
test('adummy', () => {
  expect(1).toBe(1);
});
*/


