var test = require('tape');
var merge = require('..').merge;

test('merge', function (t) {
    t.same(merge(null, { a: 1 }), { a: 1 }, 'null');
    t.end();
});

