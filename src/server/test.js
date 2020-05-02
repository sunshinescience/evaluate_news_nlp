import { makeResponse } from './index.js'

//var requestObject = require('./index')
//var validateRequest = requestObject.aylienData;

test('This function has a return so it should be defined', () => {
  expect(makeResponse("blahblah", {"subjectivity": "blehblehbleh", "polarity": "blublu"})).toBeDefined();
});
