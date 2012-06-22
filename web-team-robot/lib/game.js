var Maze = require('./maze');

function Game(playerNo, mazeLines) {

	this.player = playerNo;
	this.maze = new Maze(mazeLines);
}

	function getDirection() {
		return 'S';
	}

Game.prototype.getDirection = getDirection;



module.exports = Game;