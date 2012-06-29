function Maze(mazeLines) {
  this.mazeLines = mazeLines
}

function getLocation(find){
	return { x: 1, y: 1 };
}

Maze.prototype.getLocation = getLocation;


module.exports = Maze;