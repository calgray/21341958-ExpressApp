
/*
 * GET home page.
 */

exports.organiser = function(req, res){
  res.render('organiser.html', { title: 'Cloudant Boiler Plate' });
};

exports.twitterstats = function(req, res) {
  res.render('twitterstats.html', { title: 'Hello World!' });
};
