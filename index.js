'use strict';

const colour = require("chalk");



var printly = {
    print: function(value) {
        console.log(value);
    },
    data: function data(value) {
        console.table(value);
    },
    error: function error(value) {
        console.error(value);
    },
    clear: function clear() {
        console.clear();
    },
    count: function count(value) {
        console.count(value);
    },
    dir: function dir(value) {
        console.dir(value);
    },
    time: function time(value) {
        console.time(value);
    },
    timeEnd: function timeEnd(value) {
        console.timeEnd(value);
    }
};


module.exports = {
    printly,
    colour,
}