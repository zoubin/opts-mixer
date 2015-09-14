var test = require('tap').test;
var mix = require('../lib/mix-undef');

test('mix-undef', function (t) {
  t.same(mix({ a: 1 }, { b: 2 }), { a: 1, b: 2 });
  t.same(mix({ a: 1, c: 3 }, { a: 2, b: 2 }), { a: 1, b: 2, c: 3 });
  t.same(mix({ a: 1 }, { a: 2 }, { b: 2 }, { c: null }), { a: 1, b: 2, c: null });
  t.same(mix({ a: 1 }, null), { a: 1 }, 'null');
  t.same(mix({ a: 1 }, undefined), { a: 1 }, 'undefined');
  t.same(mix({ a: 1 }), { a: 1 }, 'no src');
  t.end();
});

