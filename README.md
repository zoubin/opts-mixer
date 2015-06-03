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

## mix(receiver, src1, src2,...)
Mix own properties supplied by *src1*, *src2*,..., into *receiver*, which must be a non-null object.

Same key causes overwriting, the later appearance in *arguments* the winner.

The *receiver* will be returned.

## util.merge(src1, src2,...)
Same as `Mixer.mix({}, src1, src2,...)`.

## util.copy(src)
Same as `Mixer.mix({}, src)`.

## util.pick(filter, src1, src2,...)

* filter: String | Array

Same as `Mixer.merge(src1, src2,...)`, but only keys specified in *filter* appear in the result.

## util.unpick(filter, src1, src2,...)

* filter: String | Array

Merge all properties from  `src1, src2,...` except those appear in `filter`

## mixer = Mixer(filter, defaults)

* *filter*: Array. Only mix keys contained in *filter*.
* *defaults*: Array. Always mix *defaults*, and it will always be overwritten.

## mixer = Mixer(o). o is Object rather than Array
Same as `Mixer(Object.keys(o), o)`

### mixer.mix(receiver, src1, src2,...)

Same as `Mixer.mix(receiver, defaults, Mixer.pick(filter, src1, src2, ...))`.

Only specified keys (by *filter*) are mixed into *receiver*.

### mixer.merge(src1, src2,...)

Same as `mixer.mix({}, src1, src2, ...)`.

