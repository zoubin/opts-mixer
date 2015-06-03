var has = require('./has.js');

module.exports = function (o, fn, context) {
    for (var k in o) {
        if (has(o, k)) {
            fn.call(context || o, o[k], k, o);
        }
    }
};

