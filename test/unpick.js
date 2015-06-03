var unpick = require('..').unpick;
var test = require('tape');

test('unpick(v, o)', function(t) {
    t.same(
        unpick('x', { x:1, y:2 })
        ,
        { y:2 }
    );
    t.end();
});

test('unpick(v, o1, o2)', function(t) {
    t.same(
        unpick('x', { x:1 }, { y:2 })
        ,
        { y:2 }
    );
    t.end();
});

test('unpick([], o1, o2)', function(t) {
    t.same(
        unpick(['x', 'z'], { x:1 }, { y:2 }, { z:3 })
        ,
        { y:2 }
    );
    t.end();
});
