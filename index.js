'use strict';

const pms = require("ms");
const colour = require("chalk");

// printly(); to print a message
const printly = (value) => {
    console.log(value);
};


// printly all functions here
printly.data = function data(value) {
    console.table(value);
};

printly.error = function error(value) {
    console.error(value);
};

printly.clear = function clear() {
    console.clear();
};

printly.count = function count(value) {
    console.count(value);
};

printly.dir = function dir(value) {
    console.dir(value);
};

printly.time = function time(value) {
    console.time(value);
};

printly.timeEnd = function timeEnd(value) {
    console.timeEnd(value);
};


module.exports = {
    printly,
    colour,
    pms,
}
