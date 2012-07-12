var ArgumentParser = require("./lib/argumentparser");
var parser = new ArgumentParser(process.argv);

var game = parser.parse();

console.log(game.getDirection());