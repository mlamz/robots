var should = require('chai').should();

describe('ArgumentParser', function() {
	
	it('should return a game given the process arguments array', function() {
		var ArgumentParser = require('../lib/argumentparser'),
			Game = require('../lib/game'),
			argumentParser,
			game;

		argumentParser = new ArgumentParser(["node", "app.js", "You are player 1\n'***'\n'*1*'\n'*.*'"]);
		game = argumentParser.parse();

		should.exist(game);
		game.constructor.name.should.equal('Game');
		game.player.should.equal(1);

		should.exist(game.maze);
		game.maze.constructor.name.should.equal('Maze');
	});

});