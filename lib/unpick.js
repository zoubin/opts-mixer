var mix = require('./mix.js');
var arrayify = require('arrayify-slice');

module.exports = function (filter) {
    var all = mix.bind(null, {}).apply(null, arrayify(arguments, 1));
    [].concat(filter).forEach(function (k) {
        delete all[k];
    });
    return all;
};
