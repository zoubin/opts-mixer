# util-mix
Object mixing methods

## Usage

```javascript
var util = require('util-mix');
// actually util === mix
var mix = util.mix;
var Mixer = util.Mixer;

var o = mix({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }

var mixer = Mixer({ a: 0, b: 0 });
o = mixer.mix({}); // { a: 0, b: 0 }
o = mixer.mix({ c: 1 }); // { a: 0, b: 0, c: 1 }
```

## util.mix(receiver, src1, src2,...)
Mix own properties supplied by *src1*, *src2*,..., into *receiver*, which must be a non-null object.

Same key causes overwriting, the later appearance in *arguments* the winner.

The *receiver* will be returned.

```javascript
var r = {};
var o = mix(r, { x:1, y:1 }, { y:2 });

o === r; // true
o; // { x:1, y:2 }
```

## util.merge(src1, src2,...)
Same as `util.mix({}, src1, src2,...)`.

```javascript
var r = {};
var o = merge(r, { x:1, y:1 }, { y:2 });

r; // {}
o; // { x:1, y:2 }
```

## util.copy(src)
Same as `util.merge`.

## util.pick(filter, src1, src2,...)

### filter

Type: `String`, `Array`

Same as `util.merge(src1, src2,...)`, but only keys specified in `filter` appear in the result.

```javascript
var o = pick(['x', 'y'], { x:1, y:1 }, { y:2 }, { z:3 });

o; // { x:1, y:2 }
```

## util.unpick(filter, src1, src2,...)

### filter

Type: `String`, `Array`


Merge all properties from  `src1, src2,...` except those appear in `filter`

```javascript
var o = unpick(['x', 'y'], { x:1, y:1 }, { y:2 }, { z:3 });

o; // { z:3 }
```

## util.chop(filter, o)

### filter

Type: `String`, `Array`

`pick` keys specified by `filter` from `o`, and delete them from `o`.

```javascript
var o = { x:1, y:2, z:3 };
var chopped = chop(['x', 'y'], o);

chopped; // { x:1, y:2 }
o; // { z:3 }
```

## Class: util.Mixer

### methods

#### mix(receiver, src1, src2,...)

#### merge(src1, src2,...)

### mixer = Mixer(filter, defaults)

#### filter

Type: `Array`

Only mix keys contained in `filter`.

#### defaults

Type: `Object`

Always mix `defaults`, and it will always be overwritten.

```javascript
var mixer = Mixer(['x', 'y'], { x:1 });
var opts = {};
var o = mixer.mix(opts, { y:2, z:3 });

o === opts; // true
o; // { x:1, y:2 }
```

### mixer = Mixer(o)

#### o

Type: `Object`

Same as `Mixer(Object.keys(o), o)`

```javascript
var mixer = Mixer({ x:1, y:1 });
var o = mixer.merge({ y:2 }, { z:3 });

o === opts; // true
o; // { x:1, y:2 }
```

