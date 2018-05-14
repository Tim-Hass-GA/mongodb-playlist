//// USE CASE ////
// Create and save in db
// Use findOneAndRemove to delete record from db
// Try to findOne in the db (just removed)
// assert that results is "NULL"

/// REMOVING TESTS ///

const assert = require('assert');
const Character = require('../models/character');

// describe tests
describe("deleting records", function(){
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
  it('delete one record from the db', function(done){
    // find and delete the item from the db
      Character.findOneAndRemove({ name: 'Timmy' }).then(function(){
        // see if the one you just deleted is really gone
        // if results is "NULL" = success...!
        Character.findOne({ name: 'Timmy' }).then(function(result){
          assert(result === null);
          done();
        });
      });
  });

});
