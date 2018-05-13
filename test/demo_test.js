/// DEMO TESTS //

const assert = require('assert');

// describe tests
// describe("some demo tests", function(){
  // create tests
  // ....some test
// });

// describe tests
describe("some demo tests", function(){

  // create tests
  it('adds two numbers together', function(done){
    // predict the results of what it should be
    // to pass the test
    assert(2 + 3 === 5);
    done();
  });

  // it('adds two numbers not !== 5 together', function(){
  //   // predict the results of what it should be
  //   // to pass the test
  //   assert(2 + 4 !== 5);
  // });

});
