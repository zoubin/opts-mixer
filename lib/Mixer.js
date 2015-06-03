var mix = require('./mix.js');
var pick = require('./pick.js');

module.exports = Mixer;

function Mixer(filter, defaults) {
    if (!(this instanceof Mixer)) {
        return new Mixer(filter, defaults);
    }
    if (!Array.isArray(filter)) {
        defaults = filter;
        filter = defaults ? Object.keys(defaults) : null;
    }
    this.filter = filter;
    this.defaults = defaults || {};
}

Mixer.prototype.mix = function(receiver) {
    var src = [].slice.call(arguments, 1);
    if (this.filter) {
        return mix(
            receiver,
            this.defaults,
            src.length ? pick.apply(null, [this.filter].concat(src)) : null
        );
    } else {
        return mix.apply(null, [receiver, this.defaults].concat(src));
    }
};

Mixer.prototype.merge = function() {
    var src = [].slice.call(arguments);
    src.unshift({});
    return this.mix.apply(this, src);
};
