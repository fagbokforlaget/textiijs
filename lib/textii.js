var fs        = require('fs'),
    stemmer   = require('porter-stemmer').stemmer,
    stopwords = require('./stopwords').stopwords ;

require('./utils');

function textii(text, options) {
  var self = this;

  self.text = text;

  self.default_options = {
    word_separator: /\W+/,
    min_word_length: 3,
    encoding: 'utf8'
  };

  textii.prototype.setOptions = function(opts) {
    if (opts) {
      self.options = opts;
      self.options.word_separator = opts.word_separator || self.default_options.word_separator;
      self.options.min_word_length = opts.min_word_length || self.default_options.min_word_length;
      self.options.encoding = opts.encoding || self.default_options.encoding;
    } else {
      self.options = self.default_options;
    }
  };
  self.setOptions(options);

  textii.prototype.get = function(opts, cb) {
    self.getText(function(text) {
      self.split_text(text, function(words) {
        self.normalize_words(words, function(normalized_words) {
          self.index_words(normalized_words, opts, function(indexed_words) {
            self.clean_words(indexed_words, function(cleaned_words) {
              cb(cleaned_words);
            });
          });
        });
      });
    });
  };

  textii.prototype.getText = function(callback) {
    callback(self.text)
  };

  textii.prototype.split_text = function(text, callback) {
    var words = text.split(self.options.word_separator);
    callback(words);
  };

  textii.prototype.normalize_words = function(words, callback) {
    var normalized_words = words.map(function(word) {
      return stemmer(word).toLowerCase();
    });
    callback(normalized_words);
  };

  textii.prototype.index_words = function(normalized_words, opts, callback) {
    var indexed_words = {};
    for (var i = 0; i < normalized_words.length; i++) {
      var word = normalized_words[i];
      if (opts && opts.section) {
        if (indexed_words[word] === undefined) {
          indexed_words[word] = {};
        }
        if (indexed_words[word][opts.section] === undefined) {
          indexed_words[word][opts.section] = [];
        }
        indexed_words[word][opts.section].push(i);
      } else {
        if (indexed_words[word] === undefined) {
          indexed_words[word] = [];
        }
        indexed_words[word].push(i);
      }
    }
    callback(indexed_words);
  };

  textii.prototype.clean_words = function(indexed_words, callback) {
    var cleaned_words = indexed_words.filter_by_key(function(key) {
      var valid_length = (key.length >= self.options.min_word_length),
          not_a_stopword = (stopwords.indexOf(key) === -1);
      return valid_length && not_a_stopword;
    });
    callback(cleaned_words);
  };
}

// module exports
exports = module.exports = function(text, options, callback) {
  return new textii(text, options, callback);
};
