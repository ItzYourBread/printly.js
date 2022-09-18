![](images/printlyjs.png)

[![CodeQL](https://github.com/NotRealArif/printly.js/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/NotRealArif/printly.js/actions/workflows/codeql-analysis.yml)
[![Repo Dependents](https://badgen.net/github/dependents-repo/NotRealArif/printly.js)](https://github.com/NotRealArif/printly.js/network/dependents)
[![npm version](https://img.shields.io/npm/v/printly.js.svg)](https://www.npmjs.com/package/printly.js)
[![NPM Download](https://img.shields.io/npm/dm/printly.js.svg?style=flat)](https://www.npmjs.com/package/printly.js)

## Printly.js ⚡️

## What is Printly.js?
Printly.js is the rewrite of console objects in JavaScript and much better then console object and Printly.js has colours support on console messages.

## Supported on?
Printly.js has TypeScript and JavaScript supoort.

## There are 10 printly objects

* 1 `printly();` for printing a console message.
* 2 `printly.error();` outputs an error message to the Web console.
* 3 `printly.warn();` outputs a warning message to the Web console.
* 4 `printly.data();` utilize small spaces to not only function as additional storage, but to also show off some of your home decor and personality.
* 5 `printly.clear();` clears the console if the console allows it.
* 6 `printly.count();` logs the number of times that this particular call to count() has been called.
* 7 `printly.dir();` displays an interactive list of the properties of the specified JavaScript object. 
* 8 `printly.time();` starts a timer you can use to track how long an operation takes.
* 9 `printly.timeEnd();` stops a timer that was previously started by calling console.
* 10 `printly.timeout();` it's basically setTimeout but easy 

## Example ✨

Here is a example with printly objects.
```js
const { printly } = require("printly.js");


printly("Hello Printly.js!");
```
Here is a example with colours and some background colours.
```js
// you can use colour or color if you want!
const { printly, colour } = require("printly.js");


printly(colour.yellow("Hello Printly.js with colour!"));

printly(colour.bgCyan(colour.red("Hello background colour"));
```
And here is a example with printly.timeout.
```js
const { printly, colour } = require("printly.js");


printly(colour.yellow("Hello Printly.js"));


printly(colour.bgCyan(colour.red("Hello background colour"));



// by default is printly(); on first argument
printly.timeout(("Hello printly.js after 4 seconds"), 4000);
// example with colour
printly.timeout(colour.cyan("Hello printly.js after 4 seconds"), 4000);

```
And here is the millisecond converter.
```js
const { printly, ms } = require("printly.js");


ms('1d')      // 86400000
ms('10h')     // 36000000
ms('2h')      // 7200000
ms('1m')      // 60000
ms('5s')      // 5000
ms('100')     // 100
ms(100)       // 100

ms(60000)             // "1 minute"
ms(2 * 60000)         // "2 minutes"

printly.timeout(("Hello Printly.js"), ms('10 hours'));    // "10 hours"
```

## Colors

<table>
  <thead><th>Foreground</th><th>Background</th><th></th></thead>
  <tbody>
    <tr><td>black</td><td>bgBlack</td><td><img src="http://medyk.org/colors/000000.png" width="30" height="30" /></td></tr>
    <tr><td>red</td><td>bgRed</td><td><img src="http://medyk.org/colors/800000.png" width="30" height="30" /></td></tr>
    <tr><td>green</td><td>bgGreen</td><td><img src="http://medyk.org/colors/008000.png" width="30" height="30" /></td></tr>
    <tr><td>yellow</td><td>bgYellow</td><td><img src="http://medyk.org/colors/808000.png" width="30" height="30" /></td></tr>
    <tr><td>blue</td><td>bgBlue</td><td><img src="http://medyk.org/colors/000080.png" width="30" height="30" /></td></tr>
    <tr><td>magenta</td><td>bgMagenta</td><td><img src="http://medyk.org/colors/800080.png" width="30" height="30" /></td></tr>
    <tr><td>cyan</td><td>bgCyan</td><td><img src="http://medyk.org/colors/008080.png" width="30" height="30" /></td></tr>
    <tr><td>white</td><td>bgWhite</td><td><img src="http://medyk.org/colors/c0c0c0.png" width="30" height="30" /></td></tr>
  </tbody>
</table>

##### Bright variants

<table>
  <thead><th>Foreground</th><th>Background</th><th></th></thead>
  <tbody>
    <tr><td>blackBright</td><td>bgBlackBright</td><td><img src="http://medyk.org/colors/808080.png" width="30" height="30" /></td></tr>
    <tr><td>redBright</td><td>bgRedBright</td><td><img src="http://medyk.org/colors/ff0000.png" width="30" height="30" /></td></tr>
    <tr><td>greenBright</td><td>bgGreenBright</td><td><img src="http://medyk.org/colors/00ff00.png" width="30" height="30" /></td></tr>
    <tr><td>yellowBright</td><td>bgYellowBright</td><td><img src="http://medyk.org/colors/ffff00.png" width="30" height="30" /></td></tr>
    <tr><td>blueBright</td><td>bgBlueBright</td><td><img src="http://medyk.org/colors/0000ff.png" width="30" height="30" /></td></tr>
    <tr><td>magentaBright</td><td>bgMagentaBright</td><td><img src="http://medyk.org/colors/ff00ff.png" width="30" height="30" /></td></tr>
    <tr><td>cyanBright</td><td>bgCyanBright</td><td><img src="http://medyk.org/colors/00ffff.png" width="30" height="30" /></td></tr>
    <tr><td>whiteBright</td><td>bgWhiteBright</td><td><img src="http://medyk.org/colors/ffffff.png" width="30" height="30" /></td></tr>
  </tbody>
</table>

**Not supported on Windows and some terminals**. However if used in not supported environment, the closest color from basic (16 colors) palette is chosen.


## Have a great day!
thats it hope it will help JavaScript and TypeScript developers! 
