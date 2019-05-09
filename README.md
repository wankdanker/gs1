gs1
---

Generate check digits for various gs1 formats.

GTIN-8, GTIN-12, GTIN-13, GTIN-14, GSIN, SSCC

usage
-----

```js
const gs1 = require('gs1')

console.log(gs1('2345678'));
//23456785

console.log(gs1.checkdigit('2345678'));
//5

console.log(gs1.validate('23456785'));
//true

console.log(gs1.validate('23456783'));
//false
```

license
-------

MIT