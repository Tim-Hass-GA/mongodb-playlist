//// USE CASE ////
// Create and save in db
// Use findOneAndUpdate to update name of record in db
// Try to findOne in the db (just updated)
// assert that results was updated

/// UPDATING TESTS ///
const assert = require('assert');
const Character = require('../models/character');

// describe tests
describe("updating records", function(){
  // be sure to pass in done...
  // refactor the save and create
  // a beforeEach function

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

  // find tests
  it('update one record in the db', function(done){
    // findOneAndUpdate - the one just created
    Character.findOneAndUpdate({ name: 'Timmy' }, { name: 'Johnny' }).then(function(){
      Character.findOne({ _id: testChar._id }).then(function(result){
        assert(result.name === 'Johnny');
        done();
      });
    });
  });

});
