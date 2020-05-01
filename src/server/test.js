import { aylienData } from './index.js'

//var requestObject = require('./index')
//var validateRequest = requestObject.aylienData;


test('the data should be of type object ', () => {
    expect( typeof aylienData ).toBe( 'object' );
  });
