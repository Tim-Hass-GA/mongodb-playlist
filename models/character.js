// require mongoose and import Schema //

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// build the Schema and Model
const CharacterSchema = new Schema({
  name: String,
  weight: Number
});

// create a model from the Schema
// model('name', schema)
// use singlar names....
const Character = mongoose.model('character', CharacterSchema);

// export for use
module.exports = Character;
