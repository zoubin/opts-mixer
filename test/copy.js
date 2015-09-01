var test = require('tap').test;
var copy = require('../lib/copy');

test('copy', function (t) {
  t.same(copy({ a: 1 }), { a: 1 });
  t.end();
});

