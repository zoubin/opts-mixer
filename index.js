var requireDirectory = require('require-directory');
var lib = requireDirectory(module, './lib');
var mix = lib.mix;
module.exports = mix(mix, lib);
