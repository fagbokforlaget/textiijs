## textiijs

[![Build Status](https://travis-ci.org/fagbokforlaget/textiijs.png)](https://travis-ci.org/fagbokforlaget/textiijs)

Inverted index for text file.

* excludes "stop words"
* normalize words with [porter-stemmer](https://github.com/jedp/porter-stemmer)
* converts words to lowercase
* excludes words of length less than a specified value - default: 3
* reports word's position within a text file counting excluded ones
* supports section indexing
* splits text with regexp word separator - default: /\W+/
* supports text encoding - default: 'utf8'

### Installation

via npm:

```
$ npm install textiijs
```

### Usage
#### No options and section given
```
var textii = require('../index')

var pii = new textii("./sample1.txt", null, function(err, data) {
  if (err) {
    return console.log("Error: " + err);
  }
  console.log(data);
});

pii.get();

#### With options and section given
```
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
```

### Tests
```
$ make test
```
Coverage report
```
$ make test-cov
```
