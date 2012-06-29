var Game = require('./game');

function ArgumentParser(argv) {
	this.argv = argv;
}

ArgumentParser.prototype.parse = function parse() {
	var unquotedLines, mazeArgs = this.argv.slice(5)[0];

	var lines = mazeArgs.split("\n");
	var player = lines.shift();
	var playerNo = parseInt(player[0]);

	unquotedLines = lines.map(function(line) {
		return line.replace(/\'/g, '');
	});

	return new Game(playerNo, unquotedLines);
}

module.exports = ArgumentParser;