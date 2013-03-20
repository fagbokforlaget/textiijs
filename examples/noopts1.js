// var textii = require('textiijs'),
var textii = require('../index'),
    sample_text = "Zero, one and three or five, six, seven... seven...";

var pii = new textii(sample_text);

pii.get(null, function(data) {
  console.log(data);
});
