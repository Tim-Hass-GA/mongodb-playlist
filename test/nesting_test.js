//// USE CASE ////
// before each test drop the collection
// Create and save author with sub document in db
// Use findOne to find record
// assert that sub document length is equal to 1
//
// before each test drop the collection
// Create and save author with sub document in db
// Use findOne to find record
// push a new element onto the array
// save the record to the db
// Use findOne to find record 
// assert that sub document length is equal to 2
//

const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');


describe("Nesting records", function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });

  // create tests
  /// ADD RECORD WITH SUB DOCUMENT ///
  it('creates an author with sub-documents', function(done){
    var pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{title:"name of wind", pages: 400}]
    });

    pat.save().then(function(){
      Author.findOne({ name: 'Patrick Rothfuss'}).then(function(record){
        assert(record.books.length === 1);
        done();
      });
    });
  });


  /// ADD to EXISTING RECORD ///
  it('adds a book to an author', function(done){
    /////////////// could be refactored ///////////////////////
    var pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{title:"name of wind", pages: 400}]
    });

    pat.save().then(function(){
      Author.findOne({ name: 'Patrick Rothfuss' }).then(function(record){
        // add a books to the books array
        record.books.push({title: "Wise man's feer", pages: 500});
        record.save().then(function(){
          Author.findOne({ name: 'Patrick Rothfuss' }).then(function(record){
            assert(record.books.length === 2);
            done();
          });
        });
      });
    });
  });

});
