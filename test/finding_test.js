/// SAVING TESTS ///
const assert = require('assert');
const Character = require('../models/character');

// describe tests
describe("finding records", function(){
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
      // test if the char is new (return true if not yet in database,
      // false if the character has been saved into the database)
      assert(testChar.isNew === false);
      done();
    });
  });

  // find tests
  it('find one record from the db', function(done){
    Character.findOne({ name: 'Timmy' }).then(function(result){
      assert(result.name === 'Timmy');
      done();
    });
  });

  // find test by id
  it('find one record from the db by ID', function(done){
    Character.findOne({ _id: testChar._id }).then(function(result){
      assert(result._id.toString() === testChar._id.toString());
      done();
    });
  });


});
