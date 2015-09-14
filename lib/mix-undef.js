var each = require('./each');
var has = require('./has');

module.exports = function (r) {
  [].forEach.call(arguments, function (o, i) {
    if (i && o != null) {
      each(o, function (v, k) {
        if (!has(r, k)) {
          r[k] = v;
        }
      });
    }
  });
  return r;
};


