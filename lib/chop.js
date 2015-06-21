var has = require('./has.js');

module.exports = function (filter, o) {
    if (o == null) {
        return {};
    }
    return [].concat(filter).reduce(function (r, k) {
        if (has(o, k)) {
            r[k] = o[k];
            delete o[k];
        }
        return r;
    }, {});
}
