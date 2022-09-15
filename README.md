![](images/printlyjs.png)

[![Repo Dependents](https://badgen.net/github/dependents-repo/NotRealArif/printly.js)](https://github.com/NotRealArif/printly.js/network/dependents)
[![npm version](https://img.shields.io/npm/v/printly.js.svg)](https://www.npmjs.com/package/printly.js)
[![NPM Download](https://img.shields.io/npm/dm/printly.js.svg?style=flat)](https://www.npmjs.com/package/printly.js)


## What is Printly.js?
Printly.js is the remake of console object in JavaScript and much better then console object and Printly.js has colours support on console messages, for colours and its have in-built ms module.

## There are 8 printly objects

* 1 `printly();`
* 2 `printly.error();`
* 3 `printly.data();`
* 4 `printly.clear();`
* 5 `printly.count();`
* 6 `printly.dir();`
* 7 `printly.time();`
* 8 `printly.timeEnd();`

## Example ✨

Here is a example with printly objects
```js
const { printly } = require("printly.js");

printly("Hello Printly.js!");
```
Here is a example with colours remember we are using chalk@4.1.0 for colours
```js
// you can use color or colour
const { printly, colour } = require("printly.js");

printly(colour.yellow("Hello Printly.js with colour!"));
```
And here is a example with pms remember pms is using ms@2.1.3
```js
const { printly, colour, pms } = require("printly.js");

printly(colour.yellow("Hello Printly.js"));

setTimeout(async function() {
        printly(c.yellow(`Hello! how are you doing?`))
    }, 
pms("0.5s"));
```

## Have a great day!
thats it hope it will help JavaScript and TypeScript developers! 
