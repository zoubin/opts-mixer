var test = require('tap').test;
var merge = require('../lib/merge');

test('merge', function (t) {
  t.same(merge(null, { a: 1 }), { a: 1 }, 'null');
  t.end();
});

