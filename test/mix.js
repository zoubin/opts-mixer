var test = require('tape');
var mix = require('..').mix;

test('mix', function (t) {
    t.same(mix({ a: 1 }, { b: 2 }), { a: 1, b: 2 }, 'keys joined');
    t.same(mix({ a: 1, c: 3 }, { a: 2, b: 2 }), { a: 2, b: 2, c: 3 }, 'overwrite');
    t.same(mix({ a: 1 }, null), { a: 1 }, 'null');
    t.same(mix({ a: 1 }, undefined), { a: 1 }, 'undefined');
    t.same(mix({ a: 1 }), { a: 1 }, 'no src');
    t.end();
});

