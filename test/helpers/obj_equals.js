Object.prototype.equals = function(x) {
  var p;
  for (p in this) {
    if (typeof(x[p]) === 'undefined') {
      return false;
    }
  }
  for(p in this) {
    if (this[p]) {
      switch(typeof(this[p])) {
        case 'object':
          if (!this[p].equals(x[p])) {
            return false;
          }
          break;
        case 'function':
          if (typeof(x[p]) === 'undefined' || (p !== 'equals' && this[p].toString() !== x[p].toString())) {
            return false;
          }
          break;
        default:
          if (this[p] !== x[p]) {
            return false;
          }
      }
    } else {
      if (x[p]) {
        return false;
      }
    }
  }
  for(p in x) {
      if(typeof(this[p])==='undefined') {return false;}
  }
  return true;
};
