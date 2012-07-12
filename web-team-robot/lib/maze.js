function Maze(mazeLines) {
  this.mazeLines = mazeLines
}

function getLocationOf(tile){
	var yIndex, xIndex;

	for(yIndex = 0; yIndex < this.mazeLines.length; yIndex = yIndex + 1){
		xIndex = this.mazeLines[yIndex].indexOf(tile); 
		if (xIndex >= 0){
			return { x: xIndex, y: yIndex };
		}		
	}
}

Maze.prototype.getLocationOf = getLocationOf;


module.exports = Maze;