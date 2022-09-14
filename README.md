![](images/printlyjs.png)

## What is Printly.js?
Printly.js is the remake of console object in JavaScript and much better then console object and Printly.js has colours support on console messages, for colours we are using chalk@4.1.0 for colours 

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
And here is a example with colours
```js
const { printly, colour } = require("printly.js");

printly(colour.yellow("Hello Printly.js with colour!"));
```