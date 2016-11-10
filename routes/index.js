
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Cloudant Boiler Plate' });
};

exports.twitterstats = function(req, res) {
  res.render('twitterstats.html', { title: 'Hello World!' });
};
