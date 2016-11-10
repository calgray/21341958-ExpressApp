
var Popularity = require('../models/Popularity');
var Tweets = require('../models/Tweets');


module.exports.popularity = function(req, res) {

  Popularity.find(req.query, function(err, docs) {
    if(err) res.send(err);
    res.json(docs);
  });

};

module.exports.tweets = function(req, res) {
  Tweets.find(req.query, function(err, docs) {
    if(err) res.send(err);
    res.json(docs);
  });
}
