var util = require('util');
module.exports = mix;
module.exports.mix = mix;
module.exports.Mixer = Mixer;
module.exports.pick = pick;
module.exports.eachOwn = eachOwn;
module.exports.has = has;
module.exports.copy = copy;
module.exports.merge = merge;

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

function has(o, k) {
    return Object.prototype.hasOwnProperty.call(o, k);
}

function eachOwn(o, fn, context) {
    for (var k in o) {
        if (has(o, k)) {
            fn.call(context || o, o[k], k, o);
        }
    }
}

function pick(filter, o) {
    var args = arguments;
    if (args.length < 2 || util.isNullOrUndefined(o)) {
        return {};
    }
    return filter.reduce(function (r, k) {
        for (var i = 1, len = args.length; i < len; i++) {
            var o = args[i];
            if (has(o, k)) {
                r[k] = o[k];
            }
        }
        return r;
    }, {});
}

function mix(r) {
    [].forEach.call(arguments, function (o, i) {
        if (i && !util.isNullOrUndefined(o)) {
            eachOwn(o, function (v, k) {
                r[k] = v;
            });
        }
    });
    return r;
}

function copy(o) {
    return mix({}, o);
}

function merge() {
    return mix.apply(null, [].concat.apply([{}], arguments));
}
