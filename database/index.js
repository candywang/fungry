const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fungry');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoose')
});

let reviewSchema = new Schema({
  date: { type: Date, default: Date.now },
  place_id: String,
  place_name: String,
  category: Array,
  address: Array,
  item: String,
  rating: Number,
  comment: String
  });

let Item = mongoose.model('Item', reviewSchema);

module.exports = Item;