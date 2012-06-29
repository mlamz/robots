var should = require('chai').should();

describe('ArgumentParser', function() {
	
	it('should return a game given the process arguments array', function() {
		var ArgumentParser = require('../lib/argumentparser'),
			Game = require('../lib/game'),
			argumentParser,
			game;

		argumentParser = new ArgumentParser(["node", "app.js", "You", "are", "player", "1\n'***'\n'*1*'\n'*.*'"]);
		game = argumentParser.parse();

		should.exist(game);
		game.constructor.name.should.equal('Game');
	});

	it('should return a game with a maze and its lines ' +
		'given the process arguments array', function() {
		var ArgumentParser = require('../lib/argumentparser'),
			Game = require('../lib/game'),
			argumentParser,
			game, maze;

		argumentParser = new ArgumentParser(["node", "app.js", "You", "are", "player", "1\n'***'\n'*1*'\n'*.*'"]);
		game = argumentParser.parse();
		maze = game.maze;


		should.exist(maze);
		maze.constructor.name.should.equal('Maze');
		should.exist(maze.mazeLines);
		maze.mazeLines.length.should.equal(3);
		maze.mazeLines[0].should.equal('***');
		maze.mazeLines[1].should.equal('*1*');
		maze.mazeLines[2].should.equal('*.*');
	});


	it('should read the player id when it is 1', function() {
		var ArgumentParser = require('../lib/argumentparser'),
			Game = require('../lib/game'),
			argumentParser,
			game;

		argumentParser = new ArgumentParser(["node", "app.js", "You", "are", "player", "1\n'***'\n'12*'\n'*.*'"]);
		game = argumentParser.parse();

		game.player.should.equal(1);
	});

	it('should read the player id when it is 2', function() {
		var ArgumentParser = require('../lib/argumentparser'),
			Game = require('../lib/game'),
			argumentParser,
			game;

		argumentParser = new ArgumentParser(["node", "app.js", "You", "are", "player", "2\n'***'\n'12*'\n'*.*'"]);
		game = argumentParser.parse();

		game.player.should.equal(2);
	});

});