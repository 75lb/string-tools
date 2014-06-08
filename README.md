[![view on npm](http://img.shields.io/npm/v/string-ting.svg)](https://www.npmjs.org/package/string-ting)
[![npm module downloads per month](http://img.shields.io/npm/dm/string-ting.svg)](https://www.npmjs.org/package/string-ting)
[![Build Status](https://travis-ci.org/75lb/string-ting.svg?branch=master)](https://travis-ci.org/75lb/string-ting)
[![Dependency Status](https://david-dm.org/75lb/string-ting.svg)](https://david-dm.org/75lb/string-ting)


#string-ting
Some useful functions for working with strings




**Contents**
* [symbol](#module_string-ting.symbol)
* [escapeRegExp()](#module_string-ting.escapeRegExp)
* [fill(fillWith, len)](#module_string-ting.fill)
* [padRight(input, width, [padWith])](#module_string-ting.padRight)




<a name="module_string-ting.symbol"></a>
###s.symbol
some cross platform symbols (`tick` and `cross`)





<a name="module_string-ting.escapeRegExp"></a>
###s.escapeRegExp()
escape special regular expression characters





####Example
```js
> w.escapeRegExp("(.*)");
'\\(\\.\\*\\)'
```



<a name="module_string-ting.fill"></a>
###s.fill(fillWith, len)
Create a new string filled with the supplied character


- fillWith `string` the fill character  
- len `number` the length of the output string  


**Returns**: `string`

####Example
```js
> w.fill("a", 10)
'aaaaaaaaaa'
> w.fill("ab", 10)
'aaaaaaaaaa'
```



<a name="module_string-ting.padRight"></a>
###s.padRight(input, width, [padWith])
Add padding to the right of a string


- input `string` the string to pad  
- width `number` the desired final width  
- [padWith] `string` the padding character  


**Returns**: `string`

####Example
```js
> w.padRight("clive", 1)
'clive'
> w.padRight("clive", 1, "-")
'clive'
> w.padRight("clive", 10, "-")
'clive-----'
```









