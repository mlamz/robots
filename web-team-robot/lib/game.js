var Maze = require('./maze');

function Game(playerNo, mazeLines) {
	this.player = playerNo;
	this.maze = new Maze(mazeLines);
}

function getDirection() {
	if (! this.player) {
		throw new Error("No player in game");
	}
	return 'S';
}

function getLocation(){
	return this.maze.getLocation(this.player.toString());
}


Game.prototype.getDirection = getDirection;
Game.prototype.getLocation = getLocation;



module.exports = Game;