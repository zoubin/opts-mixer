var test = require('tape');
var chop = require('..').chop;

test.only('chop', function (t) {
    var o = { a: 1, b: 2, c: 3 };
    t.same(chop([], o), {});
    t.same(o, { a: 1, b: 2, c: 3 });

    o = { a: 1, b: 2, c: 3 };
    t.same(chop('a', o), { a:1 });
    t.same(o, { b: 2, c: 3 });

    o = { a: 1, b: 2, c: 3 };
    t.same(chop(['d'], o), {});
    t.same(o, { a: 1, b: 2, c: 3 });

    o = { a: 1, b: 2, c: 3 };
    t.same(chop(['a','b'], o), {a:1,b:2});
    t.same(o, { c: 3 });

    o = { a: 1, b: 2, c: 3 };
    t.same(chop(['a','b','c','d'], o), {a:1,b:2,c:3});
    t.same(o, {});

    t.end();
});

