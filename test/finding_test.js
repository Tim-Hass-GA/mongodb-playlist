//// USE CASE ////
// Create and save in db
// Use findOne to get the record from db
// assert that results values are equal

// Use findOneById to get the record from db by Id
// assert that results the corret record

/// FINDING TESTS ///

const assert = require('assert');
const Character = require('../models/character');

// describe tests
describe("finding records", function(){
  // be sure to pass in done...
  // refactor save
  var testChar;

  beforeEach(function(done){
    // save new character to db
    testChar = new Character({
      name: 'Timmy',
      weight: 180
    });
    // use a promise to handle saving to db
    testChar.save().then(function(){
      done();
    });
  });

  // find one by name tests
  it('find one record from the db by name', function(done){
    Character.findOne({ name: 'Timmy' }).then(function(result){
      assert(result.name === 'Timmy');
      done();
    });
  });

  // find one by id test
  it('find one record from the db by ID', function(done){
    Character.findOne({ _id: testChar._id }).then(function(result){
      assert(result._id.toString() === testChar._id.toString());
      done();
    });
  });

});
