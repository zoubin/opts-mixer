var test = require('tape');
var Mixer = require('..');

test('Mixer', function (t) {
    var opts = Mixer(['a', 'b'], { a: 0, b: 0 });
    t.same(opts.mix({}), { a: 0, b: 0 }, 'default value');
    t.same(opts.mix({ c: 1 }), { a: 0, b: 0, c: 1 }, 'overwrite');
    t.same(opts.merge(), { a: 0, b: 0 }, 'non-overwrite');
    t.end();
});
