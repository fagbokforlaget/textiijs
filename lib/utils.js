Object.prototype.filter_by_key = function(predicate) {
  var result = {}, key;
  for (key in this) {
    if (this.hasOwnProperty(key) && predicate(key)) {
      result[key] = this[key];
    }
  }
  return result;
};
