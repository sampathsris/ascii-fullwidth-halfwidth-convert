
# ascii-fullwidth-halfwidth-convert

Coverts ASCII characters in the range '\u0021'-'\u007E' to their equivalent full-width form ('\uFF01'-'\uFF5E'), and vice versa. Also converts between the ASCII space '\u0020' and Ideographic Space '\u3000'.

## Install

```
$ npm install ascii-fullwidth-halfwidth-convert
```

## Usage

```
const AsciiFullwidthHalfwidthConvert = require('ascii-fullwidth-halfwidth-convert');
const converter = new AsciiFullwidthHalfwidthConvert();
const str = 'THE ｑｕｉｃｋ， ＢＲＯＷＮ\u3000fox.';

converter.toFullWidth(str);
//=> 'ＴＨＥ\u3000ｑｕｉｃｋ，\u3000ＢＲＯＷＮ\u3000ｆｏｘ．'

converter.toHalfWidth(str);
//=> 'THE quick, BROWN fox.'
```

## License

MIT © Sampath Sitinamaluwa
