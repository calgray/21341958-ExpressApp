
var Schema = require('mongoose').Schema;
var ObjectId = Schema.ObjectId;

var tweetsSchema = new Schema({
  _id: ObjectId,
  hashtag: String,
  score: Number,
  total: Number
});

module.exports = mongoose.model('tweets', tweetsSchema, 'tweets');
