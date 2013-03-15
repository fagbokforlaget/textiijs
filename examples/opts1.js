var textii = require('../index')

var options = {
  "word_separator": /\W+/,
  "min_word_length": 3,
  "encoding": "utf8"
}

var pii = new textii("./sample1.txt", options, function(err, data) {
  if (err) {
    return console.log("Error: " + err);
  }
  console.log(data);
});

var get_options = {
  "section": "page1"
};

pii.get(get_options);
