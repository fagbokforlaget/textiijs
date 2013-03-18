var textii = require('textiijs'),
    sample_text = "Zero, one and three or five, six, seven... seven...",
    options = { "word_separator": /\W+/, "min_word_length": 3, "encoding": "utf8" },
    get_options = { "section": "page1" };

var pii = new textii(sample_text, options, function(err, data) {
  if (err) {
    return console.log("Error: " + err);
  }
  console.log(data);
});

pii.get(get_options);
