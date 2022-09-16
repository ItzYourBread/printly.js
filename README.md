![](images/printlyjs.png)

[![Repo Dependents](https://badgen.net/github/dependents-repo/NotRealArif/printly.js)](https://github.com/NotRealArif/printly.js/network/dependents)
[![npm version](https://img.shields.io/npm/v/printly.js.svg)](https://www.npmjs.com/package/printly.js)
[![NPM Download](https://img.shields.io/npm/dm/printly.js.svg?style=flat)](https://www.npmjs.com/package/printly.js)

## Printly.js ⚡️

## What is Printly.js?
Printly.js is the remake of console object in JavaScript and much better then console object and Printly.js has colours support on console messages

## There are 9 printly objects

* 1 `printly();` for printing a console message.
* 2 `printly.error();` outputs an error message to the Web console.
* 3 `printly.warn();` outputs a warning message to the Web console.
* 4 `printly.data();` utilize small spaces to not only function as additional storage, but to also show off some of your home decor and personality.
* 5 `printly.clear();` clears the console if the console allows it.
* 6 `printly.count();` logs the number of times that this particular call to count() has been called.
* 7 `printly.dir();` displays an interactive list of the properties of the specified JavaScript object. 
* 8 `printly.time();` starts a timer you can use to track how long an operation takes.
* 9 `printly.timeEnd();` stops a timer that was previously started by calling console.

## Example ✨

Here is a example with printly objects
```js
const { printly } = require("printly.js");


printly("Hello Printly.js!");
```
Here is a example with colours and some background colours
```js
// you can use colour or color if you want!
const { printly, colour } = require("printly.js");


printly(colour.yellow("Hello Printly.js with colour!"));

printly(colour.bgCyan(colour.red("Hello background colour"));
```
And here is a example with pms
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
