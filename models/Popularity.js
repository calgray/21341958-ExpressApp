
var Schema = require('mongoose').Schema;
var ObjectId = Schema.ObjectId;

var popularitySchema = new Schema({
  _id: ObjectId,
  hashtag: String,
  score: Number,
  total: Number
});

module.exports = mongoose.model('popularity', popularitySchema, 'popularity');
