'use strict';

const pms = require("ms");
const colour = require("chalk");
const color = require("chalk");

// printly(); to print a message
const printly = (x) => {
    console.log(x);
};


// printly all functions here
printly.data = function data(x) {
    console.table(x);
};

printly.error = function error(x) {
    console.error(x);
};

printly.clear = function clear() {
    console.clear();
};

printly.count = function count(x) {
    console.count(x);
};

printly.dir = function dir(x) {
    console.dir(x);
};

printly.time = function time(x) {
    console.time(x);
};

printly.timeEnd = function timeEnd(x) {
    console.timeEnd(x);
};


module.exports = {
    printly,
    colour,
    color,
    pms,
}
