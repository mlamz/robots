function getMazeNode(baseCoordinate, direction, mazeState){
	var mazeNodeCoordinate = [];
	switch(direction){
		case "N":
			mazeNodeCoordinate = [baseCoordinate[0],baseCoordinate[1]-1];
			break;
		case "S":
			mazeNodeCoordinate = [baseCoordinate[0],baseCoordinate[1]+1];
			break;
		case "E":
			mazeNodeCoordinate = [baseCoordinate[0]+1,baseCoordinate[1]];
			break;
		case "W":
			mazeNodeCoordinate = [baseCoordinate[0]-1,baseCoordinate[1]];
			break;

	}
	return mazeState[mazeNodeCoordinate];

}


function getDirection(mazeState, playerCoordinate){
	var northValue, southValue, eastValue, westValue;

	northValue = getMazeNode(playerCoordinate, "N", mazeState);
	southValue = getMazeNode(playerCoordinate, "S", mazeState);
	eastValue = getMazeNode(playerCoordinate, "E", mazeState);
	westValue = getMazeNode(playerCoordinate, "W", mazeState);

	if (northValue === "."){
		return "N";
	} else if (southValue === '.'){
		return "S";
	} else if (eastValue === '.'){
		return "E";
	} else if (westValue === '.'){
		return "W";
	}
}

module.exports = {
	getDirection: getDirection
}