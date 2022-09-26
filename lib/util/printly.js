/* 
   -----------------------------------------
                    Allah.
           There is no god but Allah.
     Allah is the creator of this universe 
   -----------------------------------------
*/

'use strict';



const printly = function() {
    console.log.apply(console, arguments);
};


printly.data = function() {
    console.table.apply(console, arguments);
};

printly.error = function() {
    console.error.apply(console, arguments);
};

printly.warn = function() {
    console.warn.apply(console, arguments);
};

printly.clear = function() {
    console.clear.apply(console, arguments);
};

printly.count = function() {
    console.count.apply(console, arguments);
};

printly.dir = function() {
    console.dir.apply(console, arguments);
};

printly.time = function() {
    console.time.apply(console, arguments);
};

printly.timeEnd = function() {
    console.timeEnd.apply(console, arguments);
};

printly.timeout = function (callback, time) {
    setTimeout(() => {console.log(callback)}, time);
};

module.exports = printly;

/*
    |------------------------------|
    |Thanks allah for creating Arif|
    |------------------------------|
*/
