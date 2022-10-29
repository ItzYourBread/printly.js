import { printly, colour, ms } from "./lib/index";

const profile = [
    {
        "Name": "Hery",
        "Age": "23",
        "Nationalty": "Indian"
    },
    {
        "Name": "Luxxy",
        "Age": "Unknown",
        "Nationalty": "British"
    },
    {
        "Name": "Arif",
        "Age": "16",
        "Nationalty": "Bangladeshi"
    }
];

// printly.data(profile);

printly(colour.blue("Something happening"));
printly.data(profile);
printly.timeout((colour.magenta("Hello World after 2 second")), ms("2s"))