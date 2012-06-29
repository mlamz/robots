var chai = require('chai');
var should = chai.should();
var spies = require('chai-spies');
var Game = require('../lib/game');

describe('game', function() {
	chai.use(spies);

	it('cannot get direction without player', function() {
		var game = new Game();

		game.getDirection.should.throw(Error);
	});

	it('can find player location in maze', function(){
		var game = new Game(1, ['**','*1.','**']);
		var locationSpy = chai.spy(game.maze.getLocation);

		game.getLocation();

		locationSpy.should.have.been.called;

	});

});
	