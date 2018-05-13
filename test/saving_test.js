/// SAVING TESTS ///
const assert = require('assert');
const Character = require('../models/character');

// describe tests
// describe("some demo tests", function(){
  // create tests
  // ....some test
// });

// describe tests
describe("saving records", function(){

  // create tests
  it('saving a new character to the db', function(done){
    // save new character to db
    var testChar = new Character({
      name: 'Timmy',
      weight: 180
    });
    // use a promise to handle saving to db
    testChar.save().then(function(){
      // test if the char is new (return true if not yet in database,
      // false if the character has been saved into the database)
      assert(testChar.isNew === false);
      done();
    });
  });
});
