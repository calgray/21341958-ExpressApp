var Subjects = require('../api/SubjectViews');

module.exports.api = function(req, res) {
  Subjects.find({}, function(err, subjectDetails) {
    if(err) res.send(err);
    res.json(subjectDetails);
  });
};
