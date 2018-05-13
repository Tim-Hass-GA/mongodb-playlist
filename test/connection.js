// testing connecting to the database

// require mongoose
const mongoose = require('mongoose');

// connect to the mongodb
mongoose.connect('mongodb://localhost/testaroo');

// element.on('click') similar too
// test the connection once,
// but listen for errors constantly...
mongoose.connection.once('open', function(){
  console.log('Connection has been made...!!!');
}).on('error', function(error){
  console.log('Connection error....', error);
});
