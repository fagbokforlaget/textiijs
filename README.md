## textiijs

[![Build Status](https://travis-ci.org/fagbokforlaget/textiijs.png)](https://travis-ci.org/fagbokforlaget/textiijs)

Text inverted index generator for node.

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
#### Neither options nor section given

```
var textii = require('textiijs'),
    sample_text = "Zero, one and three or five, six, seven... seven...";

var pii = new textii(sample_text);

pii.get(null, function(data) {
  console.log(data);
});
```

#### With options and section given

```
// var textii = require('textiijs'),
var textii = require('../index'),
    sample_text = "Zero, one and three or five, six, seven... seven...",
    options = { "word_separator": /\W+/, "min_word_length": 3, "encoding": "utf8" },
    get_options = { "section": "page1" };

var pii = new textii(sample_text, options);

pii.get(get_options, function(data) {
  console.log(data);
});
```

### Tests

```
$ make test
```

Coverage report

```
$ make test-cov
```
