[![view on npm](http://img.shields.io/npm/v/string-tools.svg)](https://www.npmjs.org/package/string-tools)
[![npm module downloads per month](http://img.shields.io/npm/dm/string-tools.svg)](https://www.npmjs.org/package/string-tools)
[![Build Status](https://travis-ci.org/75lb/string-tools.svg?branch=master)](https://travis-ci.org/75lb/string-tools)
[![Dependency Status](https://david-dm.org/75lb/string-tools.svg)](https://david-dm.org/75lb/string-tools)


#string-tools
Some useful functions for working with strings









**Contents**
* [symbol](#module_string-tools.symbol)
* [escapeRegExp()](#module_string-tools.escapeRegExp)
* [fill(fillWith, len)](#module_string-tools.fill)
* [padRight(input, width, [padWith])](#module_string-tools.padRight)
* [repeat(input, times)](#module_string-tools.repeat)
* [clipLeft(input, width, [prefix])](#module_string-tools.clipLeft)




<a name="module_string-tools.symbol"></a>
###s.symbol
some cross platform symbols (`tick` and `cross`)





<a name="module_string-tools.escapeRegExp"></a>
###escapeRegExp()
escape special regular expression characters





####Example
```js
> w.escapeRegExp("(.*)");
'\\(\\.\\*\\)'
```



<a name="module_string-tools.fill"></a>
###fill(fillWith, len)
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



<a name="module_string-tools.padRight"></a>
###padRight(input, width, [padWith])
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



<a name="module_string-tools.repeat"></a>
###repeat(input, times)
returns the input string repeated the specified number of times


- input `string` input string to repeat  
- times `number` the number of times to repeat  


**Returns**: `string`




<a name="module_string-tools.clipLeft"></a>
###clipLeft(input, width, [prefix])
returns the input string clipped from the left side in order to meet the specified `width`


- input `string` input string to repeat  
- width `number` the desired final width  
- [prefix] `string` the prefix to replace the clipped region  


**Returns**: `string`










