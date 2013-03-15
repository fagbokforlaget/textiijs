var textii = require('../index')

var pii = new textii("./sample1.txt", null, function(err, data) {
  if (err) {
    return console.log("Error: " + err);
  }
  console.log(data);
});

pii.get();
