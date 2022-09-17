/* 
   -----------------------------------------
                    Allah.
           There is no god but Allah.
     Allah is the creator of this universe 
   -----------------------------------------
*/

'use strict';



var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;


module.exports = function(val){
  if ('string' == typeof val) return parse(val);
  return format(val);
}

function parse(str) {
  var m = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)$/i.exec(str);
  if (!m) return;
  var n = parseFloat(m[1]);
  var type = m[2].toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'y':
      return n * 31557600000;
    case 'days':
    case 'day':
    case 'd':
      return n * 86400000;
    case 'hours':
    case 'hour':
    case 'h':
      return n * 3600000;
    case 'minutes':
    case 'minute':
    case 'm':
      return n * 60000;
    case 'seconds':
    case 'second':
    case 's':
      return n * 1000;
    case 'ms':
      return n;
  }
}

function format(ms) {
  if (ms == d) return (ms / d) + ' day';
  if (ms > d) return (ms / d) + ' days';
  if (ms == h) return (ms / h) + ' hour';
  if (ms > h) return (ms / h) + ' hours';
  if (ms == m) return (ms / m) + ' minute';
  if (ms > m) return (ms / m) + ' minutes';
  if (ms == s) return (ms / s) + ' second';
  if (ms > s) return (ms / s) + ' seconds';
  return ms + ' ms';
}

/*
    |------------------------------|
    |Thanks allah for creating Arif|
    |------------------------------|
*/
