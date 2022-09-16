/* 
   -----------------------------------------
                    Allah.
           There is no god but Allah.
     Allah is the creator of this universe 
   -----------------------------------------
*/ 


const { printly, colour } = require("./lib/index.js");
// const { colour } = require("./lib/util/colour.js");


printly(colour.bgRed("Hello colourful world with Printly.js")); 
printly(colour.bgBlue("Hello colourful world with Printly.js"));
printly(colour.bgGreen("Hello colourful world with Printly.js")); 
printly(colour.bgYellow("Hello colourful world with Printly.js")); 
printly(colour.bgMagenta("Hello colourful world with Printly.js")); 
printly(colour.bgCyan("Hello colourful world with Printly.js")); 
printly(colour.bgWhite(colour.black("Hello colourful world with Printly.js"))); 
printly(colour.bgBlack("Hello colourful world with Printly.js"));



printly(colour.bgRedBright("\nHello colourful world with Printly.js"));
printly(colour.bgBlueBright("Hello colourful world with Printly.js")); 
printly(colour.bgGreenBright("Hello colourful world with Printly.js")); 
printly(colour.bgYellowBright("Hello colourful world with Printly.js")); 
printly(colour.bgMagentaBright("Hello colourful world with Printly.js")); 
printly(colour.bgCyanBright("Hello colourful world with Printly.js")); 
printly(colour.bgWhiteBright(colour.black("Hello colourful world with Printly.js"))); 
printly(colour.bgBlackBright("Hello colourful world with Printly.js")); 



printly(colour.red("\n\nHello colourful world with Printly.js"));
printly(colour.blue("Hello colourful world with Printly.js"));
printly(colour.green("Hello colourful world with Printly.js")); 
printly(colour.yellow("Hello colourful world with Printly.js"));
printly(colour.magenta("Hello colourful world with Printly.js"));
printly(colour.cyan("Hello colourful world with Printly.js"));
printly(colour.white("Hello colourful world with Printly.js"));
printly(colour.black("Hello colourful world with Printly.js"));


printly(colour.redBright("\n\n\nHello colourful world with Printly.js"));
printly(colour.blueBright("Hello colourful world with Printly.js"));
printly(colour.greenBright("Hello colourful world with Printly.js"));
printly(colour.yellowBright("Hello colourful world with Printly.js")); 
printly(colour.magentaBright("Hello colourful world with Printly.js")); 
printly(colour.cyanBright("Hello colourful world with Printly.js"));
printly(colour.whiteBright("Hello colourful world with Printly.js"));
printly(colour.blackBright("Hello colourful world with Printly.js"));

printly.time("Printly.js");
for (let i = 0; i < 100000; i++) {
  // some code
}
printly.timeEnd("Printly.js");


printly(color.bgRedBright("Hello with color"))