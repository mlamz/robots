
var ArgumentParser = require("./lib/argumentparser");

var parser = new ArgumentParser(process.argv);
var maze = parser.parse();

console.log(maze.getDirection());