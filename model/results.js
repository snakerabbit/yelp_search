var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultsSchema = new Schema({
  businesses: String,
  total: String
});

module.exports = mongoose.model('Result', ResultsSchema);
