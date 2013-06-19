var LanguageList = {},
    Stopwords;

require("fs").readdirSync(__dirname + "/stopwords").forEach(function(file) {
  var names = file.split('.');
  LanguageList[names[0]] = require('./stopwords/' + file);
});

Stopwords = (function() {

  function Stopwords(lang) {
    this.stopwords = (LanguageList[lang] ? LanguageList[lang].stopwords : []);
    return this;
  }

  Stopwords.LanguageList = Object.keys(LanguageList);

  Stopwords.prototype.check = function(word) {
    return this.stopwords.indexOf(word) > -1;
  };

  return Stopwords;
})();

module.exports = Stopwords;