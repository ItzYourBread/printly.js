const {
    printly,
    colour,
} = require("./lib/index.js");

const ms = require("ms");
let time = ms("5s")

printly.timeout(("Hello World"), 2000)
printly.timeout(colour.greenBright("Hello again"), 2500)