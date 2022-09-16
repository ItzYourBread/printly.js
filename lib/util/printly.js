/* 
   -----------------------------------------
                    Allah.
           There is no god but Allah.
     Allah is the creator of this universe 
   -----------------------------------------
*/

'use strict';



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

printly.warn = function warn(x) {
    console.warn(x);
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

module.exports = printly;

/*
    |------------------------------|
    |Thanks allah for creating Arif|
    |------------------------------|
*/
