// require mongoose and import Schema //

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// build the Schema and Model
// sub-documents of author
const BookSchema = new Schema({
  title: String,
  pages: Number
});

// build the Schema and Model
// nesting books within author
const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

// create a model from the Schema
// model('name', schema)
// use singlar names....
const Author = mongoose.model('author', AuthorSchema);

// export for use
module.exports = Author;
