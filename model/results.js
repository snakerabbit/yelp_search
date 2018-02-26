var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultsSchema = new Schema({
  businesses: [{
    name:String,
    review_count: Number,
    rating: Number,
    location:{
      display_address:[String]
    }
  }],
  total: String,
  searchTerm: String
});

module.exports = mongoose.model('Result', ResultsSchema);
