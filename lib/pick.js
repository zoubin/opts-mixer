var has = require('./has.js');

module.exports = function (filter) {
  var args = arguments;
  if (args.length < 2) {
    return {};
  }
  return [].concat(filter).reduce(function (r, k) {
    for (var i = 1, len = args.length; i < len; i++) {
      var o = args[i];
      if (has(o, k)) {
        r[k] = o[k];
      }
    }
    return r;
  }, {});
};
