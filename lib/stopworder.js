var LanguageList = {},
    Stopworder;

require("fs").readdirSync("./lib/stopwords").forEach(function(file) {
  var names = file.split('.');
  LanguageList[names[0]] = require('./stopwords/' + file);
});

Stopworder = (function() {

  function Stopworder(lang) {
    this.stopwords = (LanguageList[lang] ? LanguageList[lang].stopwords : []);
    return this;
  }

  Stopworder.LanguageList = Object.keys(LanguageList);

  Stopworder.prototype.check = function(word) {
    return this.stopwords.indexOf(word) > -1;
  };

  return Stopworder;
})();

module.exports = Stopworder;