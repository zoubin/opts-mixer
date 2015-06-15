var mix = require('./mix.js');

module.exports = function () {
    return mix.bind(null, {}).apply(null, arguments);
};

