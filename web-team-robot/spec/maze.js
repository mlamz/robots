var chai = require('chai');
var	should = chai.should();
var Maze = require('../lib/maze');

describe('maze', function() {

	it("should get location of the player in middle of maze", function(){
		var maze;
		var playerNumber = 1;
		var locationResult;

		maze = new Maze(['**.','*.1','**.']);
		locationResult = maze.getLocationOf(playerNumber);

		locationResult.should.deep.equal({ x: 2, y : 1 });
	});

	it("should get location of the player in corner", function(){
		var maze;
		var playerNumber = 1;
		var locationResult;

		maze = new Maze(['1..','*..','***']);
		locationResult = maze.getLocationOf(playerNumber);

		locationResult.should.deep.equal({ x: 0, y : 0 });
	});

	it("should be undefined for player not on maze", function(){
		var maze;
		var playerNumber = 1;
		var locationResult;

		maze = new Maze(['...','*..','***']);
		locationResult = maze.getLocationOf(playerNumber);

		should.not.exist(locationResult);
	});


});
	