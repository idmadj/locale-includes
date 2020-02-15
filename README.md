# localeIncludes()
[![npm](https://img.shields.io/npm/v/locale-includes.svg)](https://www.npmjs.com/package/locale-includes)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/locale-includes.svg)

[`String.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) but using [`localeCompare`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare).


## Install
```sh
npm i locale-includes
```


## Syntax
```js
localeIncludes(string, searchString[, options])
```

### Parameters
+ `string` (string)  
  A string to be searched within.

+ `searchString` (string)  
  A string to be searched for within `string`.

+ `options` (object) - *Optional*  
  An object with some or all of the following properties:

  + `position` (number) - *Default: 0*  
    The position within `string` at which to begin searching for `searchString`.

  + `locales` (string|array)  
    Passed through as the `locales` parameter to [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#Parameters).

  + *Any other property*  
    Passed through in the `options` parameter to [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#Parameters).

### Return value
+ (bool)  
  Whether the search string is found anywhere within the given string or not.


## Examples
```js
import {localeIncludes} from `locale-includes`;

localeIncludes("Abcdef", "cde");
// true

localeIncludes("Abcdef", "cde", {position: 3});
// false

localeIncludes("àḃḉdÉf", "bCde", {usage: "search", sensitivity: "base"});
// true
```

## See also
[`String.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)  
[`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)  