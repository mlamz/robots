var Maze = require('./maze');

function Game() {

	this.player = 1;
	this.maze = new Maze();
}

	function getDirection() {
		return 'S';
	}

Game.prototype.getDirection = getDirection;



module.exports = Game;