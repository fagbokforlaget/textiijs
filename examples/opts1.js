// var textii = require('textiijs'),
var textii = require('../index'),
    sample_text = "Zero, one and three or five, six, seven... seven...",
    options = { "word_separator": /\W+/, "min_word_length": 3, "encoding": "utf8" },
    get_options = { "section": "page1" };

var pii = new textii(sample_text, options);

pii.get(get_options, function(err, data) {
  if (err) {
    return console.log("Error: " + err);
  }
  console.log(data);
});
