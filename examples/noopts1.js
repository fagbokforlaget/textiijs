// var textii = require('textiijs'),
var textii = require('../index'),
    sample_text = "Zero, one and three or five, six, seven... seven...";

var pii = new textii(sample_text, null, function(err, data) {
  if (err) {
    return console.log("Error: " + err);
  }
  console.log(data);
});

pii.get();
