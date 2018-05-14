// testing connecting to the database //

// require mongoose
const mongoose = require('mongoose');

// ES6 promise
// mongoose.Promise = global.Promise;

// create the before function for mocha to
// Connect to the db before test run...
before(function(done){
  // connect to the mongodb
  mongoose.connect('mongodb://localhost/testaroo');
  // element.on('click') similar too
  // test the connection once,
  // but listen for errors constantly...
  mongoose.connection.once('open', function(){
    console.log('Connection has been made...!!!');
    done();
  }).on('error', function(error){
    console.log('Connection error....', error);
  });
});

// empty the db before each test
// DROP the collection before testing each time.
beforeEach(function(done){
  // DROP THE collection, then begin tests
  mongoose.connection.collections.characters.drop(function(){
    done();
  });
});

// create the after function for mocha to
// to do something after the test has completed...
after(function(done){
  console.log('TEST COMPLETE...!');
  done();
})
