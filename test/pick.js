var test = require('tap').test;
var pick = require('../lib/pick');

test('pick', function (t) {
  t.same(pick(['a', 'b'], { a: 1, b: 2, c: 3 }), { a: 1, b: 2 }, 'all keys presented');
  t.same(pick(['a', 'd'], { a: 1, b: 2, c: 3 }), { a: 1 }, 'some keys missing');
  t.same(pick(['a', 'b'], { a: 1, b: 3 }, { a: 2, c: 3 }), { a: 2, b: 3 }, 'overwrite');
  t.same(pick(['a', 'b'], {}), {}, 'all keys missing');
  t.same(pick([], { a: 1, b: 2, c: 3 }), {}, 'no filter');
  t.end();
});

