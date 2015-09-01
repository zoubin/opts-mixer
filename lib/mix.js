var each = require('./each.js');

module.exports = function (r) {
  [].forEach.call(arguments, function (o, i) {
    if (i && o != null) {
      each(o, function (v, k) {
        r[k] = v;
      });
    }
  });
  return r;
};

