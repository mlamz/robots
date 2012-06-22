var Game = require('./game');

function ArgumentParser(argv) {
	this.argv = argv;
}

ArgumentParser.prototype.parse = function parse() {
	var mazeArgs = this.argv.slice(2);

	//console.log('args are :' + mazeArgs);
	return new Game(mazeArgs);
}

module.exports = ArgumentParser