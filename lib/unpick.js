var mix = require('./mix.js');

module.exports = function (filter) {
  var all = mix.bind(null, {})
    .apply(null, [].slice.call(arguments, 1));
  [].concat(filter).forEach(function (k) {
    delete all[k];
  });
  return all;
};
