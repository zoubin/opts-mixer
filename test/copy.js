var test = require('tape');
var copy = require('..').copy;

test('copy', function (t) {
    t.same(copy({ a: 1 }), { a: 1 });
    t.end();
});

